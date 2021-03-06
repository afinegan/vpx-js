/*
 * VPDB - Virtual Pinball Database
 * Copyright (C) 2019 freezy <freezy@vpdb.io>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import { EventProxy } from '../../game/event-proxy';
import { PlayerPhysics } from '../../game/player-physics';
import { clamp, solveQuadraticEq } from '../../math/functions';
import { Vertex3D } from '../../math/vertex3d';
import { CollisionEvent } from '../../physics/collision-event';
import {
	C_CONTACTVEL,
	C_DISP_GAIN,
	C_DISP_LIMIT,
	C_EMBEDDED,
	C_EMBEDSHOT,
	C_EMBEDVELLIMIT,
	C_LOWNORMVEL,
	C_PRECISION,
	PHYS_TOUCH,
} from '../../physics/constants';
import { elasticityWithFalloff, HARD_SCATTER } from '../../physics/functions';
import { HitObject } from '../../physics/hit-object';
import { FLT_MIN } from '../mesh';
import { TableData } from '../table/table-data';
import { Ball } from './ball';
import { BallData } from './ball-data';
import { BallMover } from './ball-mover';
import { BallState } from './ball-state';

/**
 * In the VP source code this is all part of ball.cpp. We'll try
 * to separate this more and see how far we get.
 */
export class BallHit extends HitObject {

	public readonly coll: CollisionEvent;
	public rcHitRadiusSqr: number = 0;
	public vpVolObjs: EventProxy[] = [];

	private readonly id: number; // same as ball id
	private readonly data: BallData;
	private readonly state: BallState;
	private readonly mover: BallMover;
	private readonly tableData: TableData;

	public readonly vel: Vertex3D;
	public readonly angularMomentum = new Vertex3D();
	public invMass: number;
	public inertia: number;
	public eventPos = new Vertex3D(-1, -1, -1);

	public angularVelocity = new Vertex3D();

	private playfieldReflectionStrength: number;
	private reflectionEnabled: boolean;
	private forceReflection: boolean;
	public isVisible: boolean;

	private defaultZ: number = 25.0;

	/**
	 * Creates a new ball hit.
	 *
	 * @param ball Reference to ball
	 * @param data Static ball data
	 * @param state Dynamic ball state
	 * @param initialVelocity Initial velocity
	 * @param tableData Table data
	 * @see void Ball::Init(const float mass)
	 */
	constructor(ball: Ball, data: BallData, state: BallState, initialVelocity: Vertex3D, tableData: TableData) {
		super();

		this.id = ball.id;
		this.data = data;
		this.state = state;
		this.tableData = tableData;
		this.vel = initialVelocity;
		this.mover = new BallMover(this.id, data, state, this);

		// Only called by real balls, not temporary objects created for physics/rendering
		this.invMass = 1.0 / data.mass;
		this.inertia = (2.0 / 5.0) * data.radius * data.radius * data.mass;

		this.state.isFrozen = false;

		this.playfieldReflectionStrength = 1.0;
		this.reflectionEnabled = true;
		this.forceReflection = false;
		this.isVisible = true;

		this.coll = new CollisionEvent(ball);

		if (initialVelocity) {
			this.calcHitBBox();
		}

		this.defaultZ = this.state.pos.z;
	}

	public isRealBall() {
		return !!this.vpVolObjs;
	}

	public calcHitBBox(): void {

		const vl = this.vel.length() + this.data.radius + 0.05; //!! 0.05f = paranoia
		this.hitBBox.left = this.state.pos.x - vl;
		this.hitBBox.right = this.state.pos.x + vl;
		this.hitBBox.top = this.state.pos.y - vl;
		this.hitBBox.bottom = this.state.pos.y + vl;
		this.hitBBox.zlow = this.state.pos.z - vl;
		this.hitBBox.zhigh = this.state.pos.z + vl;

		this.rcHitRadiusSqr = vl * vl;
		//assert(m_rcHitRadiusSqr <= FLT_MAX);

		// update defaultZ for ball reflection
		// if the ball was created by a kicker which is higher than the playfield
		// the defaultZ must be updated if the ball falls onto the playfield that means the Z value is equal to the radius
		if (this.state.pos.z === this.data.radius + this.tableData.tableHeight) {
			this.defaultZ = this.state.pos.z;
		}
	}

	public getMoverObject(): BallMover {
		return this.mover;
	}

	public hitTest(ball: Ball, dTime: number, coll: CollisionEvent): number {
		const d = this.state.pos.clone(true).sub(ball.state.pos);  // delta position
		const dv = this.vel.clone(true).sub(ball.hit.vel);           // delta velocity

		let bcddSq = d.lengthSq();            // square of ball center's delta distance
		let bcdd = Math.sqrt(bcddSq);         // length of delta

		if (bcdd < 1.0e-8) {                  // two balls center-over-center embedded
			d.z = -1.0;                       // patch up
			ball.state.pos.z -= d.z;              // lift up

			bcdd = 1.0;                       // patch up
			bcddSq = 1.0;                     // patch up
			dv.z = 0.1;                       // small speed difference
			ball.hit.vel.z -= dv.z;
		}

		const b = dv.dot(d);                               // inner product
		const bnv = b / bcdd;                              // normal speed of balls toward each other
		Vertex3D.release(d);

		if (bnv > C_LOWNORMVEL) {                          // dot of delta velocity and delta displacement, positive if receding no collison
			Vertex3D.release(dv);
			return -1.0;
		}

		const totalRadius = ball.data.radius + this.data.radius;
		const bnd = bcdd - totalRadius;                    // distance between ball surfaces

		let hitTime: number;
//#ifdef BALL_CONTACTS //!! leads to trouble currently, might be due to missing contact handling for -both- balls?!
		let isContact = false;
//#endif
		if (bnd <= PHYS_TOUCH) {                           // in contact?
			if (bnd < ball.data.radius * -2.0) {
				Vertex3D.release(dv);
				return -1.0;            // embedded too deep?
			}

			if ((Math.abs(bnv) > C_CONTACTVEL)             // >fast velocity, return zero time
				|| (bnd <= -PHYS_TOUCH)) {                 // zero time for rigid fast bodies
				hitTime = 0;                               // slow moving but embedded
			} else {
				hitTime = bnd / -bnv;
			}

//#ifdef BALL_CONTACTS
			if (Math.abs(bnv) <= C_CONTACTVEL) {
				isContact = true;
			}
//#endif
		} else {
			const a = dv.lengthSq();                       // square of differential velocity
			if (a < 1.0e-8) {
				Vertex3D.release(dv);
				return -1.0;            // ball moving really slow, then wait for contact
			}

			const sol = solveQuadraticEq(a, 2.0 * b, bcddSq - totalRadius * totalRadius);
			if (!sol) {
				Vertex3D.release(dv);
				return -1.0;
			}
			const [time1, time2] = sol;
			hitTime = (time1 * time2 < 0) ? Math.max(time1, time2) : Math.min(time1, time2); // find smallest nonnegative solution
		}

		if (!isFinite(hitTime) || hitTime < 0 || hitTime > dTime) {
			Vertex3D.release(dv);
			return -1.0;                // .. was some time previous || beyond the next physics tick
		}

		const hitPos = ball.state.pos.clone(true).add(dv.multiplyScalar(hitTime)); // new ball position
		Vertex3D.release(dv);

		// calc unit normal of collision
		const hitNormal = hitPos.clone(true).sub(this.state.pos);
		Vertex3D.release(hitPos);
		if (Math.abs(hitNormal.x) <= FLT_MIN && Math.abs(hitNormal.y) <= FLT_MIN && Math.abs(hitNormal.z) <= FLT_MIN) {
			Vertex3D.release(hitNormal);
			return -1.0;
		}
		coll.hitNormal.set(hitNormal).normalize();
		Vertex3D.release(hitNormal);

		coll.hitDistance = bnd;                            // actual contact distance

//#ifdef BALL_CONTACTS
		coll.isContact = isContact;
		if (isContact) {
			coll.hitOrgNormalVelocity = bnv;
		}
//#endif

		return hitTime;
	}

	public collide(coll: CollisionEvent, physics: PlayerPhysics): void {
		const ball = coll.ball;

		// make sure we process each ball/ball collision only once
		// (but if we are frozen, there won't be a second collision event, so deal with it now!)
		if ((physics.swapBallCollisionHandling && ball.id >= this.id || !physics.swapBallCollisionHandling && ball.id <= this.id) && !this.state.isFrozen) {
			return;
		}

		// target ball to object ball delta velocity
		const vRel = ball.hit.vel.clone(true).sub(this.vel);
		const vNormal = coll.hitNormal;
		let dot = vRel.dot(vNormal);
		Vertex3D.release(vRel);

		// correct displacements, mostly from low velocity, alternative to true acceleration processing
		if (dot >= -C_LOWNORMVEL) {                        // nearly receding ... make sure of conditions
			if (dot > C_LOWNORMVEL) {                      // otherwise if clearly approaching .. process the collision
				return;                                    // is this velocity clearly receding (i.e must > a minimum)
			}
//#ifdef C_EMBEDDED
			if (coll.hitDistance < -C_EMBEDDED) {
				dot = -C_EMBEDSHOT;                        // has ball become embedded???, give it a kick
			} else {
				return;
			}
//#endif
		}

		// fixme script
		// send ball/ball collision event to script function
		// if (dot < -0.25f) {   // only collisions with at least some small true impact velocity (no contacts)
		// 	g_pplayer->m_ptable->InvokeBallBallCollisionCallback(this, pball, -dot);
		// }

//#ifdef C_DISP_GAIN
		let eDist = -C_DISP_GAIN * coll.hitDistance;
		const normalDist = vNormal.clone(true).multiplyScalar(eDist);
		if (eDist > 1.0e-4) {
			if (eDist > C_DISP_LIMIT) {
				eDist = C_DISP_LIMIT;		// crossing ramps, delta noise
			}
			if (!this.state.isFrozen) {	// if the hit ball is not frozen
				eDist *= 0.5;
			}
			ball.state.pos.add(normalDist); // push along norm, back to free area
			// use the norm, but is not correct, but cheaply handled
		}

		eDist = -C_DISP_GAIN * this.coll.hitDistance;	// noisy value .... needs investigation
		if (!this.state.isFrozen && eDist > 1.0e-4) {
			if (eDist > C_DISP_LIMIT) {
				eDist = C_DISP_LIMIT;		// crossing ramps, delta noise
			}
			eDist *= 0.5;
			this.state.pos.sub(normalDist);       // pull along norm, back to free area
		}
		Vertex3D.release(normalDist);
//#endif

		const myInvMass = this.state.isFrozen ? 0.0 : this.invMass; // frozen ball has infinite mass
		const impulse = -(1.0 + 0.8) * dot / (myInvMass + ball.hit.invMass);    // resitution = 0.8

		if (!this.state.isFrozen) {
			this.vel.subAndRelease(vNormal.clone(true).multiplyScalar(impulse * myInvMass));
		}
		ball.hit.vel.addAndRelease(vNormal.clone(true).multiplyScalar(impulse * ball.hit.invMass));
		Vertex3D.release(vNormal);
	}

	public collide3DWall(hitNormal: Vertex3D, elasticity: number, elasticityFalloff: number, friction: number, scatterAngle: number): void {

		// speed normal to wall
		let dot = this.vel.dot(hitNormal);

		if (dot >= -C_LOWNORMVEL) {                        // nearly receding ... make sure of conditions
			if (dot > C_LOWNORMVEL) {                      // otherwise if clearly approaching .. process the collision
				return;                                    // is this velocity clearly receding (i.e must > a minimum)
			}
//#ifdef C_EMBEDDED
			if (this.coll.hitDistance < -C_EMBEDDED) {
				dot = -C_EMBEDSHOT;                        // has ball become embedded???, give it a kick
			} else {
				return;
			}
//#endif
		}

//#ifdef C_DISP_GAIN
		// correct displacements, mostly from low velocity, alternative to acceleration processing
		let hDist = -C_DISP_GAIN * this.coll.hitDistance;  // limit delta noise crossing ramps,
		if (hDist > 1.0e-4) {                              // when hit detection checked it what was the displacement
			if (hDist > C_DISP_LIMIT) {
				hDist = C_DISP_LIMIT;                      // crossing ramps, delta noise
			}
			// push along norm, back to free area
			this.state.pos.addAndRelease(hitNormal.clone(true).multiplyScalar(hDist));
			// use the norm, but this is not correct, reverse time is correct
		}
//#endif

		// magnitude of the impulse which is just sufficient to keep the ball from
		// penetrating the wall (needed for friction computations)
		const reactionImpulse = this.data.mass * Math.abs(dot);

		elasticity = elasticityWithFalloff(elasticity, elasticityFalloff, dot);
		dot *= -(1.0 + elasticity);
		this.vel.addAndRelease(hitNormal.clone(true).multiplyScalar(dot));   // apply collision impulse (along normal, so no torque)

		// compute friction impulse
		const surfP = hitNormal.clone(true).multiplyScalar(-this.data.radius);    // surface contact point relative to center of mass
		const surfVel = this.surfaceVelocity(surfP, true);                        // velocity at impact point
		const tangent = surfVel.clone(true)
			.subAndRelease(hitNormal.clone(true)
				.multiplyScalar(surfVel.dot(hitNormal)));                                // calc the tangential velocity

		const tangentSpSq = tangent.lengthSq();
		if (tangentSpSq > 1e-6) {
			tangent.divideScalar(Math.sqrt(tangentSpSq));                      // normalize to get tangent direction
			const vt = surfVel.dot(tangent);                                   // get speed in tangential direction

			// compute friction impulse
			const cross = Vertex3D.crossProduct(surfP, tangent, true);
			const crossInertia = cross.clone(true).divideScalar(this.inertia);
			const kt = this.invMass + tangent.dotAndRelease(Vertex3D.crossProduct(crossInertia, surfP, true));
			Vertex3D.release(crossInertia);

			// friction impulse can't be greather than coefficient of friction times collision impulse (Coulomb friction cone)
			const maxFric = friction * reactionImpulse;
			const jt = clamp(-vt / kt, -maxFric, maxFric);

			if (isFinite(jt)) {
				this.applySurfaceImpulseAndRelease(
					cross.clone(true).multiplyScalar(jt),
					tangent.clone(true).multiplyScalar(jt),
				);
			}
			Vertex3D.release(cross);
		}
		Vertex3D.release(surfP, surfVel, tangent);

		if (scatterAngle < 0.0) {
			scatterAngle = HARD_SCATTER;
		}  // if < 0 use global value
		scatterAngle *= this.tableData.globalDifficulty!; // apply difficulty weighting

		if (dot > 1.0 && scatterAngle > 1.0e-5) {          // no scatter at low velocity
			let scatter = Math.random() * 2 - 1;           // -1.0f..1.0f
			scatter *= (1.0 - scatter * scatter) * 2.59808 * scatterAngle; // shape quadratic distribution and scale
			const radsin = Math.sin(scatter);              // Green's transform matrix... rotate angle delta
			const radcos = Math.cos(scatter);              // rotational transform from current position to position at time t
			const vxt = this.vel.x;
			const vyt = this.vel.y;
			this.vel.x = vxt * radcos - vyt * radsin;      // rotate to random scatter angle
			this.vel.y = vyt * radcos + vxt * radsin;
		}
	}

	public surfaceVelocity(surfP: Vertex3D, recycle = false): Vertex3D {
		return this.vel
				.clone(recycle)
				.addAndRelease(Vertex3D.crossProduct(this.angularVelocity, surfP, true)); // linear velocity plus tangential velocity due to rotation
	}

	/** @deprecated use {@link applySurfaceImpulseAndRelease()} */
	public applySurfaceImpulse(rotI: Vertex3D, impulse: Vertex3D, recycle = false): void {
		this.vel.addAndRelease(impulse.clone(true).multiplyScalar(this.invMass));
		this.angularMomentum.add(rotI);
		const angularMomentum = this.angularMomentum.clone(true);
		this.angularVelocity.set(angularMomentum.divideScalar(this.inertia));
		if (recycle) {
			Vertex3D.release(rotI, impulse);
		}
		Vertex3D.release(angularMomentum);
	}

	public applySurfaceImpulseAndRelease(rotI: Vertex3D, impulse: Vertex3D): void {
		this.vel.addAndRelease(impulse.clone(true).multiplyScalar(this.invMass));
		this.angularMomentum.add(rotI);
		const angularMomentum = this.angularMomentum.clone(true);
		this.angularVelocity.set(angularMomentum.divideScalar(this.inertia));
		Vertex3D.release(rotI, impulse, angularMomentum);
	}

	public handleStaticContact(coll: CollisionEvent, friction: number, dTime: number, physics: PlayerPhysics): void {
		const normVel = this.vel.dot(coll.hitNormal);      // this should be zero, but only up to +/- C_CONTACTVEL

		// If some collision has changed the ball's velocity, we may not have to do anything.
		if (normVel <= C_CONTACTVEL) {
			const fe = physics.gravity.clone(true).multiplyScalar(this.data.mass);   // external forces (only gravity for now)
			const dot = fe.dot(coll.hitNormal);
			const normalForce = Math.max(0.0, -(dot * dTime + coll.hitOrgNormalVelocity!)); // normal force is always nonnegative
			Vertex3D.release(fe);

			// Add just enough to kill original normal velocity and counteract the external forces.
			this.vel.addAndRelease(coll.hitNormal.clone(true).multiplyScalar(normalForce));

			// #ifdef C_EMBEDVELLIMIT
			if (coll.hitDistance <= PHYS_TOUCH) {
				this.vel.addAndRelease(coll.hitNormal.clone(true).multiplyScalar(Math.max(Math.min(C_EMBEDVELLIMIT, -coll.hitDistance), PHYS_TOUCH)));
			}
			// #endif

			this.applyFriction(coll.hitNormal, dTime, friction, physics);
		}
	}

	public applyFriction(hitNormal: Vertex3D, dtime: number, fricCoeff: number, physics: PlayerPhysics): void {

		const surfP = hitNormal.clone(true).multiplyScalar(-this.data.radius);    // surface contact point relative to center of mass
		const surfVel = this.surfaceVelocity(surfP, true);
		const slip = surfVel.clone(true).subAndRelease(hitNormal.clone(true).multiplyScalar(surfVel.dot(hitNormal)));       // calc the tangential slip velocity

		const maxFric = fricCoeff * this.data.mass * - physics.gravity.dot(hitNormal);

		const slipspeed = slip.length();
		let slipDir: Vertex3D;
		let numer: number;
		//slintf("Velocity: %.2f Angular velocity: %.2f Surface velocity: %.2f Slippage: %.2f\n", m_vel.Length(), m_angularvelocity.Length(), surfVel.Length(), slipspeed);
		//if (slipspeed > 1e-6f)

//#ifdef C_BALL_SPIN_HACK
		const normVel = this.vel.dot(hitNormal);
		if ((normVel <= 0.025) || (slipspeed < C_PRECISION)) { // check for <=0.025 originated from ball<->rubber collisions pushing the ball upwards, but this is still not enough, some could even use <=0.2
			// slip speed zero - static friction case

			const surfAcc = this.surfaceAcceleration(surfP, physics, true);
			// calc the tangential slip acceleration
			const slipAcc = surfAcc.clone(true)
				.subAndRelease(hitNormal.clone(true).multiplyScalar(surfAcc.dot(hitNormal)));

			// neither slip velocity nor slip acceleration? nothing to do here
			if (slipAcc.lengthSq() < 1e-6) {
				Vertex3D.release(surfVel, surfP, slip, slipAcc, surfAcc);
				return;
			}

			slipDir = slipAcc.clone(true).normalize();
			numer = -slipDir.dot(surfAcc);
			Vertex3D.release(surfAcc, slipAcc);

		} else {
			// nonzero slip speed - dynamic friction case
			slipDir = slip.clone(true).divideScalar(slipspeed);
			numer = -slipDir.dot(surfVel);
		}

		const cp = Vertex3D.crossProduct(surfP, slipDir, true);
		const p1 = cp.clone(true).divideScalar(this.inertia);
		const denom = this.invMass + slipDir.dotAndRelease(Vertex3D.crossProduct(p1, surfP, true));
		const friction = clamp(numer / denom, -maxFric, maxFric);

		if (isFinite(friction)) {
			this.applySurfaceImpulseAndRelease(
				cp.clone(true).multiplyScalar(dtime * friction),
				slipDir.clone(true).multiplyScalar(dtime * friction),
			);
		}
		Vertex3D.release(surfVel, cp, surfP, slip, slipDir, p1);
	}

	public surfaceAcceleration(surfP: Vertex3D, physics: PlayerPhysics, recycle = false): Vertex3D {
		// if we had any external torque, we would have to add "(deriv. of ang.vel.) x surfP" here
		const p2 = Vertex3D.crossProduct(this.angularVelocity, surfP, true);
		const acceleration = physics.gravity
			.clone(recycle)
			.multiplyScalar(this.invMass)                                                 // linear acceleration
			.addAndRelease(Vertex3D.crossProduct(this.angularVelocity, p2, true)); // centripetal acceleration
		Vertex3D.release(p2);
		return acceleration;
	}

	public setMass(mass: number) {
		this.data.mass = mass;
		this.invMass = 1.0 / mass;
		this.inertia = (2.0 / 5.0) * this.data.radius * this.data.radius * this.data.mass;
	}

	public setRadius(radius: number) {
		this.data.radius = radius;
		this.inertia = (2.0 / 5.0) * this.data.radius * this.data.radius * this.data.mass;
		this.calcHitBBox();
	}
}
