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
import { EdgeSet } from '../../math/edge-set';
import { Vertex3D } from '../../math/vertex3d';
import { CollisionType } from '../../physics/collision-type';
import { HitObject } from '../../physics/hit-object';
import { HitPoint } from '../../physics/hit-point';
import { HitTriangle } from '../../physics/hit-triangle';
import { Mesh } from '../mesh';
import { Table } from '../table/table';
import { RubberData } from './rubber-data';
import { RubberMeshGenerator } from './rubber-mesh-generator';

export class RubberHitGenerator {

	private readonly data: RubberData;
	private readonly meshGenerator: RubberMeshGenerator;

	constructor(data: RubberData, meshGenerator: RubberMeshGenerator) {
		this.data = data;
		this.meshGenerator = meshGenerator;
	}

	public generateHitObjects(events: EventProxy, table: Table): HitObject[] {

		const hitObjects: HitObject[] = [];
		const addedEdges: EdgeSet = new EdgeSet();
		const mesh = this.meshGenerator.getMeshes(table, 6, true); //!! adapt hacky code in the function if changing the "6" here

		// add collision triangles and edges
		for (let i = 0; i < mesh.indices.length; i += 3) {
			const rgv3D: Vertex3D[] = [];
			// NB: HitTriangle wants CCW vertices, but for rendering we have them in CW order
			let v = mesh.vertices[mesh.indices[i]];
			rgv3D[0] = new Vertex3D(v.x, v.y, v.z);
			v = mesh.vertices[mesh.indices[i + 2]];
			rgv3D[1] = new Vertex3D(v.x, v.y, v.z);
			v = mesh.vertices[mesh.indices[i + 1]];
			rgv3D[2] = new Vertex3D(v.x, v.y, v.z);
			hitObjects.push(new HitTriangle(rgv3D));

			hitObjects.push(...RubberHitGenerator.generateHitEdge(mesh, addedEdges, mesh.indices[i], mesh.indices[i + 2]));
			hitObjects.push(...RubberHitGenerator.generateHitEdge(mesh, addedEdges, mesh.indices[i + 2], mesh.indices[i + 1]));
			hitObjects.push(...RubberHitGenerator.generateHitEdge(mesh, addedEdges, mesh.indices[i + 1], mesh.indices[i]));
		}

		// add collision vertices
		for (const mv of mesh.vertices) {
			const v = new Vertex3D(mv.x, mv.y, mv.z);
			hitObjects.push(new HitPoint(v));
		}
		return hitObjects.map(obj => this.setupHitObject(obj, events, table));
	}

	private setupHitObject(obj: HitObject, events: EventProxy, table: Table): HitObject {
		obj.applyPhysics(this.data, table);

		// the rubber is of type ePrimitive for triggering the event in HitTriangle::Collide()
		obj.setType(CollisionType.Primitive);
		// hard coded threshold for now
		obj.threshold = 2.0;
		obj.obj = events;
		obj.fe = this.data.hitEvent;
		return obj;
	}

	private static generateHitEdge(mesh: Mesh, addedEdges: EdgeSet, i: number, j: number): HitObject[] {
		const v1 = new Vertex3D(mesh.vertices[i].x, mesh.vertices[i].y, mesh.vertices[i].z);
		const v2 = new Vertex3D(mesh.vertices[j].x, mesh.vertices[j].y, mesh.vertices[j].z);
		return addedEdges.addHitEdge(i, j, v1, v2);
	}
}
