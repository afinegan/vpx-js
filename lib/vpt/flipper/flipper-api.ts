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
import { Player } from '../../game/player';
import { degToRad, radToDeg } from '../../math/float';
import { clamp } from '../../math/functions';
import { ItemApi } from '../item-api';
import { Table } from '../table/table';
import { FlipperData } from './flipper-data';
import { FlipperHit } from './flipper-hit';
import { FlipperMover } from './flipper-mover';
import { FlipperState } from './flipper-state';

export class FlipperApi extends ItemApi<FlipperData> {

	private readonly state: FlipperState;
	private readonly hit: FlipperHit;
	private readonly mover: FlipperMover;

	constructor(data: FlipperData, state: FlipperState, hit: FlipperHit, mover: FlipperMover, events: EventProxy, player: Player, table: Table) {
		super(data, events, player, table);
		this.state = state;
		this.hit = hit;
		this.mover = mover;
	}

	get BaseRadius() { return this.data.baseRadius; }
	set BaseRadius(v) { this.data.baseRadius = v; }
	get EndRadius() { return this.data.endRadius; }
	set EndRadius(v) { this.data.endRadius = v; }
	get Length() { return this.data.flipperRadiusMax; }
	set Length(v) { this.data.flipperRadiusMax = v; }
	get EOSTorque() { return this.data.doOverridePhysics(this.table) ? this.data.overrideTorqueDamping : this.data.torqueDamping; }
	set EOSTorque(v) { if (!this.data.doOverridePhysics(this.table)) { this.data.torqueDamping = v; } }
	get EOSTorqueAngle() { return this.data.doOverridePhysics(this.table) ? this.data.overrideTorqueDampingAngle : this.data.torqueDampingAngle; }
	set EOSTorqueAngle(v) { if (!this.data.doOverridePhysics(this.table)) { this.data.torqueDampingAngle = v; } }
	get X() { return this.state.center.x; }
	set X(v) { this.state.center.x = v; }
	get Y() { return this.state.center.y; }
	set Y(v) { this.state.center.y = v; }
	get Surface() { return this.data.szSurface; }
	set Surface(v) { this.data.szSurface = v; }
	set StartAngle(v) { this.data.startAngle = v; this.mover.setStartAngle(degToRad(v)); }
	get StartAngle() { return this.data.startAngle; }
	set EndAngle(v) { this.data.endAngle = v; this.mover.setEndAngle(degToRad(v)); }
	get EndAngle() { return this.data.endAngle; }
	get CurrentAngle() { return radToDeg(this.state.angle); }
	get Material() { return this.state.material; }
	set Material(v) { this.state.material = v; }
	get Mass() { return this.mover.getMass(); }
	set Mass(v) { if (!this.data.doOverridePhysics(this.table)) { this.mover.setMass(v); } }
	get OverridePhysics() { return this.data.overridePhysics; }
	set OverridePhysics(v) {
		this.data.overridePhysics = v;
		this.data.updatePhysicsSettings(this.table);
		this.hit.updatePhysicsFromFlipper();
	}
	get RubberMaterial() { return this.state.rubberMaterial; }
	set RubberMaterial(v) { this.state.rubberMaterial = v; }
	get RubberThickness() { return this.data.rubberThickness; }
	set RubberThickness(v) { this.data.rubberThickness = v; }
	get RubberWidth() { return this.data.rubberWidth; }
	set RubberWidth(v) { this.data.rubberWidth = v; }
	get RubberHeight() { return this.data.rubberHeight; }
	set RubberHeight(v) { this.data.rubberHeight = v; }
	get Strength() { return this.data.strength; }
	set Strength(v) { if (!this.data.doOverridePhysics(this.table)) { this.data.strength = v; } }
	get Visible() { return this.state.isVisible; }
	set Visible(v) { this.state.isVisible = v; }
	get Enabled() { return this.data.isEnabled; }
	set Enabled(v) { this.data.isEnabled = v; }
	get Elasticity() { return this.hit.elasticity; }
	set Elasticity(v) { if (!this.data.doOverridePhysics(this.table)) { this.hit.elasticity = v; } }
	get ElasticityFalloff() { return this.hit.elasticityFalloff; }
	set ElasticityFalloff(v) { if (!this.data.doOverridePhysics(this.table)) { this.hit.elasticityFalloff = v; } }
	get Scatter() { return this.hit.scatter; }
	set Scatter(v) { if (!this.data.doOverridePhysics(this.table)) { this.hit.scatter = v; } }
	get Friction() { return this.hit.friction; }
	set Friction(v) { this.hit.setFriction(v); }
	get RampUp() { return this.data.doOverridePhysics(this.table) ? this.data.overrideCoilRampUp : this.data.rampUp; }
	set RampUp(v) { if (!this.data.doOverridePhysics(this.table)) { this.data.rampUp = v; } }
	get Height() { return this.data.height; }
	set Height(v) { this.data.height = v; }
	get Return() { return this.mover.getReturnRatio(); }
	set Return(v) { if (!this.data.doOverridePhysics(this.table)) { this.data.return = clamp(v, 0.0, 1.0); } }
	get FlipperRadiusMin() { return this.data.flipperRadiusMin; }
	set FlipperRadiusMin(v) { if (v < 0) { v = 0; } this.data.flipperRadiusMin = v; }
	get Image() { return this.state.texture; }
	set Image(v) { this._assertNonHdrImage(v); this.state.texture = v; }
	get ReflectionEnabled() { return this.data.isReflectionEnabled; }
	set ReflectionEnabled(v) { this.data.isReflectionEnabled = v; }

	/**
	 * Power stroke to hit ball, key/button down/pressed
	 */
	public RotateToEnd(): void {
		this.mover.enableRotateEvent = 1;
		this.mover.setSolenoidState(true);
	}

	/**
	 * Return to park, key/button up/released
	 */
	public RotateToStart() {
		this.mover.enableRotateEvent = -1;
		this.mover.setSolenoidState(false);
	}

	/**
	 * No idea wtf this is supposed to do.
	 */
	public InterfaceSupportsErrorInfo(riid: any): boolean {
		return false;
	}

	protected _getPropertyNames(): string[] {
		return Object.getOwnPropertyNames(FlipperApi.prototype);
	}
}
