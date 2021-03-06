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

import { PlayerPhysics } from '../game/player-physics';
import { Ball } from '../vpt/ball/ball';
import { CollisionEvent } from './collision-event';
import { HitKDNode } from './hit-kd-node';
import { HitObject } from './hit-object';

export class HitKD {

	public orgIdx: number[] = [];

	private rootNode: HitKDNode;

	private numItems: number = 0;
	private maxItems: number = 0;

	private orgVho: HitObject[] = [];

	public tmp: number[] = [];

	private nodes: HitKDNode[] = [];
	public numNodes: number = 0;

	constructor() {
		this.rootNode = new HitKDNode(this);
	}

	public init(vho: HitObject[]) {
		this.orgVho = vho;
		this.numItems = vho.length;

		if (this.numItems > this.maxItems) {
			this.maxItems = this.numItems;

			this.orgIdx = [];

			this.tmp = [];
			this.nodes = [];
		}
		this.numNodes = 0;
		this.rootNode.reset(this);
	}

	public fillFromVector(vho: HitObject[]): void {
		this.init(vho);

		this.rootNode.rectBounds.Clear();

		this.rootNode.start = 0;
		this.rootNode.items = this.numItems;

		for (let i = 0; i < this.numItems; ++i) {
			const pho = vho[i];
			pho.calcHitBBox(); //!! omit, as already calced?!
			this.rootNode.rectBounds.extend(pho.hitBBox);
			this.orgIdx[i] = i;
		}

		this.rootNode.createNextLevel(0, 0);
	}

	// call when the bounding boxes of the HitObjects have changed to update the tree
	public update(): void {
		this.fillFromVector(this.orgVho);
	}

	// call when finalizing a tree (no dynamic changes planned on it)
	public finalize(): void {
		this.tmp = [];
	}

	public hitTestBall(ball: Ball, collision: CollisionEvent, physics: PlayerPhysics) {
		this.rootNode.hitTestBall(ball, collision, physics);
	}

	// public hitTestXRay(pball: Ball, pvhoHit: HitObject[], coll: CollisionEvent, player: Player) {
	// 	this.rootNode.hitTestXRay(pball, pvhoHit, coll, player);
	// }

	public getItemAt(i: number): HitObject {
		return this.orgVho[ this.orgIdx[ i ] ];
	}

	/* istanbul ignore next: never executed below the "magic" check (https://www.vpforums.org/index.php?showtopic=42690) */
	public allocTwoNodes(): HitKDNode[] {
		if (this.numNodes + 1 >= this.nodes.length) {       // space for two more nodes?
			return [];

		} else {
			this.numNodes += 2;
			return this.nodes.slice(this.numNodes - 2);
		}
	}
}
