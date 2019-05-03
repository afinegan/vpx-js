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

import { Mesh } from '../../lib/vpt/mesh';

const vertices = [
	[-0.300698, 0.871887, -0.623927, 0.312300, -0.950000, 0.000000, 0.497836, 0.036364],
	[-0.583629, 0.720173, -0.006035, 0.618400, -0.785800, 0.000000, 0.331702, 0.985736],
	[-0.583629, 0.720173, -0.623927, 0.618400, -0.785800, 0.000000, 0.331702, 0.036364],
	[-0.300695, 0.871888, -0.006035, 0.312300, -0.950000, 0.000000, 0.497836, 0.985736],
	[-0.797609, 0.480827, -0.006035, 0.849900, -0.526900, 0.000000, 0.186078, 0.985736],
	[-0.797609, 0.480827, -0.623927, 0.849900, -0.526900, 0.000000, 0.186078, 0.036364],
	[-0.916825, 0.182724, -0.006035, 0.978900, -0.204500, 0.000000, 0.077372, 0.985736],
	[-0.916825, 0.182724, -0.623927, 0.978900, -0.204500, 0.000000, 0.077372, 0.036364],
	[-0.926900, -0.138192, -0.006035, 0.989800, 0.142600, 0.000000, 0.019943, 0.985736],
	[-0.926900, -0.138192, -0.623927, 0.989800, 0.142600, 0.000000, 0.019943, 0.036364],
	[-0.826617, -0.443205, -0.006035, 0.881300, 0.472500, 0.000000, 0.019943, 0.985736],
	[-0.826616, -0.443205, -0.623927, 0.881300, 0.472500, 0.000000, 0.019943, 0.036364],
	[-0.628071, -0.695526, -0.006035, 0.666600, 0.745500, -0.000000, 0.077372, 0.985736],
	[-0.628071, -0.695526, -0.623927, 0.666600, 0.745500, -0.000000, 0.077372, 0.036364],
	[-0.355210, -0.864721, -0.006035, 0.371400, 0.928500, -0.000000, 0.186078, 0.985736],
	[-0.355211, -0.864725, -0.623927, 0.371400, 0.928500, -0.000000, 0.186078, 0.036364],
	[-0.040955, -0.930391, -0.006035, 0.031400, 0.999500, -0.000000, 0.331702, 0.985736],
	[-0.040955, -0.930391, -0.623927, 0.031400, 0.999500, -0.000000, 0.331702, 0.036364],
	[0.276811, -0.884607, -0.006035, -0.312300, 0.950000, -0.000000, 0.497836, 0.985736],
	[0.276812, -0.884610, -0.623927, -0.312300, 0.950000, -0.000000, 0.497836, 0.036364],
	[0.559739, -0.732893, -0.006035, -0.618400, 0.785800, -0.000000, 0.663971, 0.985736],
	[0.559740, -0.732897, -0.623927, -0.618400, 0.785800, -0.000000, 0.663971, 0.036364],
	[0.773718, -0.493552, -0.006035, -0.849900, 0.526900, -0.000000, 0.810279, 0.985736],
	[0.773719, -0.493556, -0.623927, -0.849900, 0.526900, -0.000000, 0.810279, 0.036364],
	[0.892939, -0.195444, -0.006035, -0.978900, 0.204500, -0.000000, 0.918301, 0.985736],
	[0.892940, -0.195444, -0.623927, -0.978900, 0.204500, -0.000000, 0.918301, 0.036364],
	[0.903673, 0.146425, -0.623927, -0.988000, -0.154400, -0.000000, 0.979832, 0.036364],
	[0.802731, 0.430481, -0.006035, -0.875600, -0.483000, -0.000000, 0.975730, 0.985736],
	[0.802731, 0.430481, -0.623927, -0.875600, -0.483000, -0.000000, 0.979832, 0.036364],
	[0.903672, 0.146427, -0.006035, -0.988000, -0.154400, -0.000000, 0.975730, 0.985736],
	[0.604186, 0.682806, -0.006035, -0.666600, -0.745400, 0.000000, 0.918301, 0.985736],
	[0.604186, 0.682806, -0.623927, -0.666600, -0.745400, 0.000000, 0.918301, 0.036364],
	[0.312863, 0.863453, -0.623927, -0.093700, -0.995600, 0.000000, 0.802759, 0.036364],
	[0.300084, 0.858535, -0.006035, 0.080600, -0.996700, 0.000000, 0.795238, 0.985736],
	[0.300084, 0.858535, -0.623927, 0.080600, -0.996700, 0.000000, 0.795238, 0.036364],
	[0.312863, 0.863453, -0.006035, -0.093600, -0.995600, 0.000000, 0.802759, 0.985736],
	[0.017062, 0.917670, -0.623927, -0.031400, -0.999500, 0.000000, 0.663971, 0.036364],
	[0.017062, 0.917670, -0.006035, -0.031400, -0.999500, 0.000000, 0.663971, 0.985736],
	[0.903013, 0.125472, -0.006035, -0.999500, 0.031400, -0.000000, 0.975730, 0.985736],
	[0.903014, 0.125468, -0.623927, -0.999500, 0.031400, -0.000000, 0.979832, 0.036364],
	[0.331325, 0.852009, -0.006035, -0.526900, -0.849900, 0.000000, 0.810279, 0.985736],
	[0.331326, 0.852006, -0.623927, -0.527000, -0.849900, 0.000000, 0.810279, 0.036364],
];

const indexes = [
	0, 1, 2,
	3, 1, 0,
	1, 4, 2,
	36, 3, 0,
	2, 4, 5,
	37, 3, 36,
	4, 6, 5,
	34, 37, 36,
	5, 6, 7,
	33, 37, 34,
	6, 8, 7,
	32, 33, 34,
	7, 8, 9,
	35, 33, 32,
	8, 10, 9,
	35, 32, 41,
	9, 10, 11,
	35, 41, 40,
	10, 12, 11,
	40, 41, 31,
	11, 12, 13,
	40, 31, 30,
	12, 14, 13,
	28, 30, 31,
	13, 14, 15,
	27, 30, 28,
	14, 16, 15,
	26, 27, 28,
	15, 16, 17,
	29, 27, 26,
	16, 18, 17,
	29, 26, 39,
	17, 18, 19,
	29, 39, 38,
	18, 20, 19,
	38, 39, 25,
	19, 20, 21,
	38, 25, 24,
	20, 22, 21,
	23, 24, 25,
	21, 22, 23,
	22, 24, 23,
];

export const kickerSimpleHoleMesh = Mesh.fromArray(vertices, indexes);
