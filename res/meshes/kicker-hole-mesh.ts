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
	[0.795518, 0.000001, -0.021814, -0.235300, -0.031000, 0.971400, 0.208334, 0.169846],
	[0.941778, 0.252349, 0.021664, -0.235300, -0.031000, 0.971400, 0.166667, 0.000000],
	[0.768411, 0.205898, -0.021814, -0.235300, -0.031000, 0.971400, 0.166667, 0.169846],
	[0.975000, 0.000000, 0.021664, -0.235300, -0.031000, 0.971400, 0.208334, 0.000000],
	[0.844375, 0.487500, 0.021664, -0.219300, -0.090800, 0.971400, 0.125001, 0.000000],
	[0.768411, 0.205898, -0.021814, -0.219300, -0.090800, 0.971400, 0.166667, 0.169846],
	[0.941778, 0.252349, 0.021664, -0.219300, -0.090800, 0.971400, 0.166667, 0.000000],
	[0.688938, 0.397762, -0.021814, -0.219300, -0.090800, 0.971400, 0.125000, 0.169846],
	[0.688938, 0.397762, -0.021814, -0.188300, -0.144500, 0.971400, 0.125000, 0.169846],
	[0.689429, 0.689429, 0.021664, -0.188300, -0.144500, 0.971400, 0.083334, 0.000000],
	[0.562515, 0.562520, -0.021814, -0.188300, -0.144500, 0.971400, 0.083333, 0.169846],
	[0.844375, 0.487500, 0.021664, -0.188300, -0.144500, 0.971400, 0.125001, 0.000000],
	[0.562515, 0.562520, -0.021814, -0.144500, -0.188300, 0.971400, 0.083333, 0.169846],
	[0.689429, 0.689429, 0.021664, -0.144500, -0.188300, 0.971400, 0.083334, 0.000000],
	[0.487500, 0.844375, 0.021664, -0.144500, -0.188300, 0.971400, 0.041668, 0.000000],
	[0.397757, 0.688944, -0.021814, -0.144500, -0.188300, 0.971400, 0.041667, 0.169846],
	[0.397757, 0.688944, -0.021814, -0.090800, -0.219300, 0.971400, 0.041667, 0.169846],
	[0.252349, 0.941778, 0.021664, -0.090800, -0.219300, 0.971400, 0.000000, 0.000000],
	[0.205892, 0.768417, -0.021814, -0.090800, -0.219300, 0.971400, 0.000000, 0.169846],
	[0.487500, 0.844375, 0.021664, -0.090800, -0.219300, 0.971400, 0.041668, 0.000000],
	[0.205892, 0.768417, -0.021814, -0.031000, -0.235300, 0.971400, 0.999999, 0.169846],
	[0.252349, 0.941778, 0.021664, -0.031000, -0.235300, 0.971400, 0.999999, 0.000000],
	[0.000000, 0.975000, 0.021664, -0.031000, -0.235300, 0.971400, 0.958333, 0.000000],
	[-0.000004, 0.795523, -0.021814, -0.031000, -0.235300, 0.971400, 0.958333, 0.169846],
	[-0.000004, 0.795523, -0.021814, 0.031000, -0.235300, 0.971400, 0.958333, 0.169846],
	[-0.252349, 0.941778, 0.021664, 0.031000, -0.235300, 0.971400, 0.916667, 0.000000],
	[-0.205900, 0.768417, -0.021814, 0.031000, -0.235300, 0.971400, 0.916666, 0.169846],
	[0.000000, 0.975000, 0.021664, 0.031000, -0.235300, 0.971400, 0.958333, 0.000000],
	[-0.205900, 0.768417, -0.021814, 0.090800, -0.219300, 0.971400, 0.916666, 0.169846],
	[-0.252349, 0.941778, 0.021664, 0.090800, -0.219300, 0.971400, 0.916667, 0.000000],
	[-0.487500, 0.844375, 0.021664, 0.090800, -0.219300, 0.971400, 0.875000, 0.000000],
	[-0.397765, 0.688944, -0.021814, 0.090800, -0.219300, 0.971400, 0.875000, 0.169846],
	[-0.397765, 0.688944, -0.021814, 0.144500, -0.188300, 0.971400, 0.875000, 0.169846],
	[-0.689429, 0.689429, 0.021664, 0.144500, -0.188300, 0.971400, 0.833333, 0.000000],
	[-0.562523, 0.562520, -0.021814, 0.144500, -0.188300, 0.971400, 0.833333, 0.169846],
	[-0.487500, 0.844375, 0.021664, 0.144500, -0.188300, 0.971400, 0.875000, 0.000000],
	[-0.562523, 0.562520, -0.021814, 0.188300, -0.144500, 0.971400, 0.833333, 0.169846],
	[-0.689429, 0.689429, 0.021664, 0.188300, -0.144500, 0.971400, 0.833333, 0.000000],
	[-0.844375, 0.487500, 0.021664, 0.188300, -0.144500, 0.971400, 0.791667, 0.000000],
	[-0.688946, 0.397762, -0.021814, 0.188300, -0.144500, 0.971400, 0.791667, 0.169846],
	[-0.688946, 0.397762, -0.021814, 0.219300, -0.090800, 0.971400, 0.791667, 0.169846],
	[-0.941778, 0.252349, 0.021664, 0.219300, -0.090800, 0.971400, 0.750000, 0.000000],
	[-0.768419, 0.205898, -0.021814, 0.219300, -0.090800, 0.971400, 0.750000, 0.169846],
	[-0.844375, 0.487500, 0.021664, 0.219300, -0.090800, 0.971400, 0.791667, 0.000000],
	[-0.768419, 0.205898, -0.021814, 0.235300, -0.031000, 0.971400, 0.750000, 0.169846],
	[-0.941778, 0.252349, 0.021664, 0.235300, -0.031000, 0.971400, 0.750000, 0.000000],
	[-0.975000, 0.000000, 0.021664, 0.235300, -0.031000, 0.971400, 0.708334, 0.000000],
	[-0.795526, 0.000001, -0.021814, 0.235300, -0.031000, 0.971400, 0.708334, 0.169846],
	[-0.795526, 0.000001, -0.021814, 0.235300, 0.031000, 0.971400, 0.708334, 0.169846],
	[-0.941778, -0.252349, 0.021664, 0.235300, 0.031000, 0.971400, 0.666667, 0.000000],
	[-0.768419, -0.205895, -0.021814, 0.235300, 0.031000, 0.971400, 0.666667, 0.169846],
	[-0.975000, 0.000000, 0.021664, 0.235300, 0.031000, 0.971400, 0.708334, 0.000000],
	[-0.768419, -0.205895, -0.021814, 0.219300, 0.090800, 0.971400, 0.666667, 0.169846],
	[-0.941778, -0.252349, 0.021664, 0.219300, 0.090800, 0.971400, 0.666667, 0.000000],
	[-0.844375, -0.487500, 0.021664, 0.219300, 0.090800, 0.971400, 0.625000, 0.000000],
	[-0.688946, -0.397760, -0.021814, 0.219300, 0.090800, 0.971400, 0.625001, 0.169846],
	[-0.688946, -0.397760, -0.021814, 0.188300, 0.144500, 0.971400, 0.625001, 0.169846],
	[-0.689429, -0.689429, 0.021664, 0.188300, 0.144500, 0.971400, 0.583334, 0.000000],
	[-0.562523, -0.562518, -0.021814, 0.188300, 0.144500, 0.971400, 0.583334, 0.169846],
	[-0.844375, -0.487500, 0.021664, 0.188300, 0.144500, 0.971400, 0.625000, 0.000000],
	[-0.562523, -0.562518, -0.021814, 0.144500, 0.188300, 0.971400, 0.583334, 0.169846],
	[-0.689429, -0.689429, 0.021664, 0.144500, 0.188300, 0.971400, 0.583334, 0.000000],
	[-0.487500, -0.844375, 0.021664, 0.144500, 0.188300, 0.971400, 0.541667, 0.000000],
	[-0.397765, -0.688941, -0.021814, 0.144500, 0.188300, 0.971400, 0.541668, 0.169846],
	[-0.397765, -0.688941, -0.021814, 0.090800, 0.219300, 0.971400, 0.541668, 0.169846],
	[-0.252349, -0.941778, 0.021664, 0.090800, 0.219300, 0.971400, 0.500000, 0.000000],
	[-0.205900, -0.768414, -0.021814, 0.090800, 0.219300, 0.971400, 0.500001, 0.169846],
	[-0.487500, -0.844375, 0.021664, 0.090800, 0.219300, 0.971400, 0.541667, 0.000000],
	[-0.205900, -0.768414, -0.021814, 0.031000, 0.235300, 0.971400, 0.500001, 0.169846],
	[-0.252349, -0.941778, 0.021664, 0.031000, 0.235300, 0.971400, 0.500000, 0.000000],
	[0.000000, -0.975000, 0.021664, 0.031000, 0.235300, 0.971400, 0.458334, 0.000000],
	[-0.000004, -0.795521, -0.021814, 0.031000, 0.235300, 0.971400, 0.458335, 0.169846],
	[-0.000004, -0.795521, -0.021814, -0.031000, 0.235300, 0.971400, 0.458335, 0.169846],
	[0.252349, -0.941778, 0.021664, -0.031000, 0.235300, 0.971400, 0.416667, 0.000000],
	[0.205892, -0.768414, -0.021814, -0.031000, 0.235300, 0.971400, 0.416668, 0.169846],
	[0.000000, -0.975000, 0.021664, -0.031000, 0.235300, 0.971400, 0.458334, 0.000000],
	[0.205892, -0.768414, -0.021814, -0.090800, 0.219300, 0.971400, 0.416668, 0.169846],
	[0.252349, -0.941778, 0.021664, -0.090800, 0.219300, 0.971400, 0.416667, 0.000000],
	[0.487500, -0.844375, 0.021664, -0.090800, 0.219300, 0.971400, 0.375001, 0.000000],
	[0.397757, -0.688941, -0.021814, -0.090800, 0.219300, 0.971400, 0.375001, 0.169846],
	[0.397757, -0.688941, -0.021814, -0.144500, 0.188300, 0.971400, 0.375001, 0.169846],
	[0.689429, -0.689429, 0.021664, -0.144500, 0.188300, 0.971400, 0.333334, 0.000000],
	[0.562515, -0.562518, -0.021814, -0.144500, 0.188300, 0.971400, 0.333334, 0.169846],
	[0.487500, -0.844375, 0.021664, -0.144500, 0.188300, 0.971400, 0.375001, 0.000000],
	[0.562515, -0.562518, -0.021814, -0.188300, 0.144500, 0.971400, 0.333334, 0.169846],
	[0.689429, -0.689429, 0.021664, -0.188300, 0.144500, 0.971400, 0.333334, 0.000000],
	[0.844375, -0.487500, 0.021664, -0.188300, 0.144500, 0.971400, 0.291667, 0.000000],
	[0.688938, -0.397760, -0.021814, -0.188300, 0.144500, 0.971400, 0.291667, 0.169846],
	[0.688938, -0.397760, -0.021814, -0.219300, 0.090800, 0.971400, 0.291667, 0.169846],
	[0.941778, -0.252349, 0.021664, -0.219300, 0.090800, 0.971400, 0.250001, 0.000000],
	[0.768411, -0.205895, -0.021814, -0.219300, 0.090800, 0.971400, 0.250001, 0.169846],
	[0.844375, -0.487500, 0.021664, -0.219300, 0.090800, 0.971400, 0.291667, 0.000000],
	[0.768411, -0.205895, -0.021814, -0.235300, 0.031000, 0.971400, 0.250001, 0.169846],
	[0.941778, -0.252349, 0.021664, -0.235300, 0.031000, 0.971400, 0.250001, 0.000000],
	[0.975000, 0.000000, 0.021664, -0.235300, 0.031000, 0.971400, 0.208334, 0.000000],
	[0.795518, 0.000001, -0.021814, -0.235300, 0.031000, 0.971400, 0.208334, 0.169846],
	[0.795518, 0.000001, -0.478336, -0.991400, -0.130500, -0.000000, 0.208334, 0.992938],
	[0.795518, 0.000001, -0.021814, -0.991400, -0.130500, -0.000000, 0.208334, 0.169846],
	[0.768411, 0.205898, -0.021814, -0.991400, -0.130500, -0.000000, 0.166667, 0.169846],
	[0.768411, 0.205898, -0.478336, -0.991400, -0.130500, -0.000000, 0.166667, 0.992938],
	[0.768411, 0.205898, -0.478336, -0.923900, -0.382700, -0.000000, 0.166667, 0.992938],
	[0.688938, 0.397762, -0.021814, -0.923900, -0.382700, -0.000000, 0.125000, 0.169846],
	[0.688938, 0.397762, -0.478336, -0.923900, -0.382700, -0.000000, 0.125000, 0.992938],
	[0.768411, 0.205898, -0.021814, -0.923900, -0.382700, -0.000000, 0.166667, 0.169846],
	[0.688938, 0.397762, -0.478336, -0.793400, -0.608800, -0.000000, 0.125000, 0.992938],
	[0.688938, 0.397762, -0.021814, -0.793400, -0.608800, -0.000000, 0.125000, 0.169846],
	[0.562515, 0.562520, -0.021814, -0.793400, -0.608800, -0.000000, 0.083333, 0.169846],
	[0.562515, 0.562520, -0.478336, -0.793400, -0.608800, -0.000000, 0.083333, 0.992938],
	[0.562515, 0.562520, -0.478336, -0.608800, -0.793400, -0.000000, 0.083333, 0.992938],
	[0.397757, 0.688944, -0.021814, -0.608800, -0.793400, -0.000000, 0.041667, 0.169846],
	[0.397757, 0.688944, -0.478336, -0.608800, -0.793400, -0.000000, 0.041667, 0.992938],
	[0.562515, 0.562520, -0.021814, -0.608800, -0.793400, -0.000000, 0.083333, 0.169846],
	[0.397757, 0.688944, -0.478336, -0.382700, -0.923900, -0.000000, 0.041667, 0.992938],
	[0.205892, 0.768417, -0.021814, -0.382700, -0.923900, -0.000000, 0.000000, 0.169846],
	[0.205892, 0.768417, -0.478336, -0.382700, -0.923900, -0.000000, 0.000000, 0.992938],
	[0.397757, 0.688944, -0.021814, -0.382700, -0.923900, -0.000000, 0.041667, 0.169846],
	[0.205892, 0.768417, -0.478336, -0.130500, -0.991400, -0.000000, 1.000062, 0.992938],
	[-0.000004, 0.795523, -0.021814, -0.130500, -0.991400, -0.000000, 0.958333, 0.169846],
	[-0.000004, 0.795523, -0.478336, -0.130500, -0.991400, -0.000000, 0.958333, 0.992938],
	[0.205892, 0.768417, -0.021814, -0.130500, -0.991400, -0.000000, 0.999999, 0.169846],
	[-0.000004, 0.795523, -0.478336, 0.130500, -0.991400, -0.000000, 0.958333, 0.992938],
	[-0.000004, 0.795523, -0.021814, 0.130500, -0.991400, -0.000000, 0.958333, 0.169846],
	[-0.205900, 0.768417, -0.021814, 0.130500, -0.991400, -0.000000, 0.916666, 0.169846],
	[-0.205900, 0.768417, -0.478336, 0.130500, -0.991400, -0.000000, 0.916666, 0.992938],
	[-0.205900, 0.768417, -0.478336, 0.382700, -0.923900, -0.000000, 0.916666, 0.992938],
	[-0.397765, 0.688944, -0.021814, 0.382700, -0.923900, -0.000000, 0.875000, 0.169846],
	[-0.397765, 0.688944, -0.478336, 0.382700, -0.923900, -0.000000, 0.875000, 0.992938],
	[-0.205900, 0.768417, -0.021814, 0.382700, -0.923900, -0.000000, 0.916666, 0.169846],
	[-0.397765, 0.688944, -0.478336, 0.608800, -0.793400, -0.000000, 0.875000, 0.992938],
	[-0.397765, 0.688944, -0.021814, 0.608800, -0.793400, -0.000000, 0.875000, 0.169846],
	[-0.562523, 0.562520, -0.021814, 0.608800, -0.793400, -0.000000, 0.833333, 0.169846],
	[-0.562523, 0.562520, -0.478336, 0.608800, -0.793400, -0.000000, 0.833333, 0.992938],
	[-0.562523, 0.562520, -0.478336, 0.793400, -0.608800, -0.000000, 0.833333, 0.992938],
	[-0.688946, 0.397762, -0.021814, 0.793400, -0.608800, -0.000000, 0.791667, 0.169846],
	[-0.688946, 0.397762, -0.478336, 0.793400, -0.608800, -0.000000, 0.791667, 0.992938],
	[-0.562523, 0.562520, -0.021814, 0.793400, -0.608800, -0.000000, 0.833333, 0.169846],
	[-0.688946, 0.397762, -0.478336, 0.923900, -0.382700, -0.000000, 0.791667, 0.992938],
	[-0.688946, 0.397762, -0.021814, 0.923900, -0.382700, -0.000000, 0.791667, 0.169846],
	[-0.768419, 0.205898, -0.021814, 0.923900, -0.382700, -0.000000, 0.750000, 0.169846],
	[-0.768419, 0.205898, -0.478336, 0.923900, -0.382700, -0.000000, 0.750000, 0.992938],
	[-0.768419, 0.205898, -0.478336, 0.991400, -0.130500, -0.000000, 0.750000, 0.992938],
	[-0.795526, 0.000001, -0.021814, 0.991400, -0.130500, -0.000000, 0.708334, 0.169846],
	[-0.795526, 0.000001, -0.478336, 0.991400, -0.130500, -0.000000, 0.708334, 0.992938],
	[-0.768419, 0.205898, -0.021814, 0.991400, -0.130500, -0.000000, 0.750000, 0.169846],
	[-0.795526, 0.000001, -0.478336, 0.991400, 0.130500, -0.000000, 0.708334, 0.992938],
	[-0.795526, 0.000001, -0.021814, 0.991400, 0.130500, -0.000000, 0.708334, 0.169846],
	[-0.768419, -0.205895, -0.021814, 0.991400, 0.130500, -0.000000, 0.666667, 0.169846],
	[-0.768419, -0.205895, -0.478336, 0.991400, 0.130500, -0.000000, 0.666667, 0.992938],
	[-0.768419, -0.205895, -0.478336, 0.923900, 0.382700, -0.000000, 0.666667, 0.992938],
	[-0.688946, -0.397760, -0.021814, 0.923900, 0.382700, -0.000000, 0.625001, 0.169846],
	[-0.688946, -0.397760, -0.478336, 0.923900, 0.382700, -0.000000, 0.625001, 0.992938],
	[-0.768419, -0.205895, -0.021814, 0.923900, 0.382700, -0.000000, 0.666667, 0.169846],
	[-0.688946, -0.397760, -0.478336, 0.793400, 0.608800, -0.000000, 0.625001, 0.992938],
	[-0.688946, -0.397760, -0.021814, 0.793400, 0.608800, -0.000000, 0.625001, 0.169846],
	[-0.562523, -0.562518, -0.021814, 0.793400, 0.608800, -0.000000, 0.583334, 0.169846],
	[-0.562523, -0.562518, -0.478336, 0.793400, 0.608800, -0.000000, 0.583334, 0.992938],
	[-0.562523, -0.562518, -0.478336, 0.608800, 0.793400, -0.000000, 0.583334, 0.992938],
	[-0.397765, -0.688941, -0.021814, 0.608800, 0.793400, -0.000000, 0.541668, 0.169846],
	[-0.397765, -0.688941, -0.478336, 0.608800, 0.793400, -0.000000, 0.541668, 0.992938],
	[-0.562523, -0.562518, -0.021814, 0.608800, 0.793400, -0.000000, 0.583334, 0.169846],
	[-0.397765, -0.688941, -0.478336, 0.382700, 0.923900, -0.000000, 0.541668, 0.992938],
	[-0.397765, -0.688941, -0.021814, 0.382700, 0.923900, -0.000000, 0.541668, 0.169846],
	[-0.205900, -0.768414, -0.021814, 0.382700, 0.923900, -0.000000, 0.500001, 0.169846],
	[-0.205900, -0.768414, -0.478336, 0.382700, 0.923900, -0.000000, 0.500001, 0.992938],
	[-0.205900, -0.768414, -0.478336, 0.130500, 0.991400, -0.000000, 0.500001, 0.992938],
	[-0.000004, -0.795521, -0.021814, 0.130500, 0.991400, -0.000000, 0.458335, 0.169846],
	[-0.000004, -0.795521, -0.478336, 0.130500, 0.991400, -0.000000, 0.458335, 0.992938],
	[-0.205900, -0.768414, -0.021814, 0.130500, 0.991400, -0.000000, 0.500001, 0.169846],
	[-0.000004, -0.795521, -0.478336, -0.130500, 0.991400, -0.000000, 0.458335, 0.992938],
	[-0.000004, -0.795521, -0.021814, -0.130500, 0.991400, -0.000000, 0.458335, 0.169846],
	[0.205892, -0.768414, -0.021814, -0.130500, 0.991400, -0.000000, 0.416668, 0.169846],
	[0.205892, -0.768414, -0.478336, -0.130500, 0.991400, -0.000000, 0.416668, 0.992938],
	[0.205892, -0.768414, -0.478336, -0.382700, 0.923900, -0.000000, 0.416668, 0.992938],
	[0.397757, -0.688941, -0.021814, -0.382700, 0.923900, -0.000000, 0.375001, 0.169846],
	[0.397757, -0.688941, -0.478336, -0.382700, 0.923900, -0.000000, 0.375001, 0.992938],
	[0.205892, -0.768414, -0.021814, -0.382700, 0.923900, -0.000000, 0.416668, 0.169846],
	[0.397757, -0.688941, -0.478336, -0.608800, 0.793400, -0.000000, 0.375001, 0.992938],
	[0.397757, -0.688941, -0.021814, -0.608800, 0.793400, -0.000000, 0.375001, 0.169846],
	[0.562515, -0.562518, -0.021814, -0.608800, 0.793400, -0.000000, 0.333334, 0.169846],
	[0.562515, -0.562518, -0.478336, -0.608800, 0.793400, -0.000000, 0.333334, 0.992938],
	[0.562515, -0.562518, -0.478336, -0.793400, 0.608800, -0.000000, 0.333334, 0.992938],
	[0.688938, -0.397760, -0.021814, -0.793400, 0.608800, -0.000000, 0.291667, 0.169846],
	[0.688938, -0.397760, -0.478336, -0.793400, 0.608800, -0.000000, 0.291667, 0.992938],
	[0.562515, -0.562518, -0.021814, -0.793400, 0.608800, -0.000000, 0.333334, 0.169846],
	[0.688938, -0.397760, -0.478336, -0.923900, 0.382700, -0.000000, 0.291667, 0.992938],
	[0.688938, -0.397760, -0.021814, -0.923900, 0.382700, -0.000000, 0.291667, 0.169846],
	[0.768411, -0.205895, -0.021814, -0.923900, 0.382700, -0.000000, 0.250001, 0.169846],
	[0.768411, -0.205895, -0.478336, -0.923900, 0.382700, -0.000000, 0.250001, 0.992938],
	[0.768411, -0.205895, -0.478336, -0.991400, 0.130500, -0.000000, 0.250001, 0.992938],
	[0.795518, 0.000001, -0.021814, -0.991400, 0.130500, -0.000000, 0.208334, 0.169846],
	[0.795518, 0.000001, -0.478336, -0.991400, 0.130500, -0.000000, 0.208334, 0.992938],
	[0.768411, -0.205895, -0.021814, -0.991400, 0.130500, -0.000000, 0.250001, 0.169846],
];

const indexes = [
	0, 1, 2,
	3, 1, 0,
	4, 5, 6,
	7, 5, 4,
	8, 9, 10,
	11, 9, 8,
	12, 13, 14,
	12, 14, 15,
	16, 17, 18,
	19, 17, 16,
	20, 21, 22,
	20, 22, 23,
	24, 25, 26,
	27, 25, 24,
	28, 29, 30,
	28, 30, 31,
	32, 33, 34,
	35, 33, 32,
	36, 37, 38,
	36, 38, 39,
	40, 41, 42,
	43, 41, 40,
	44, 45, 46,
	44, 46, 47,
	48, 49, 50,
	51, 49, 48,
	52, 53, 54,
	52, 54, 55,
	56, 57, 58,
	59, 57, 56,
	60, 61, 62,
	60, 62, 63,
	64, 65, 66,
	67, 65, 64,
	68, 69, 70,
	68, 70, 71,
	72, 73, 74,
	75, 73, 72,
	76, 77, 78,
	76, 78, 79,
	80, 81, 82,
	83, 81, 80,
	84, 85, 86,
	84, 86, 87,
	88, 89, 90,
	91, 89, 88,
	92, 93, 94,
	92, 94, 95,
	96, 97, 98,
	96, 98, 99,
	100, 101, 102,
	101, 100, 103,
	104, 105, 106,
	106, 107, 104,
	108, 109, 110,
	109, 108, 111,
	112, 113, 114,
	113, 112, 115,
	116, 117, 118,
	117, 116, 119,
	120, 121, 122,
	122, 123, 120,
	124, 125, 126,
	125, 124, 127,
	128, 129, 130,
	130, 131, 128,
	132, 133, 134,
	133, 132, 135,
	136, 137, 138,
	138, 139, 136,
	140, 141, 142,
	141, 140, 143,
	144, 145, 146,
	146, 147, 144,
	148, 149, 150,
	149, 148, 151,
	152, 153, 154,
	154, 155, 152,
	156, 157, 158,
	157, 156, 159,
	160, 161, 162,
	162, 163, 160,
	164, 165, 166,
	165, 164, 167,
	168, 169, 170,
	170, 171, 168,
	172, 173, 174,
	173, 172, 175,
	176, 177, 178,
	178, 179, 176,
	180, 181, 182,
	181, 180, 183,
	184, 185, 186,
	186, 187, 184,
	188, 189, 190,
	189, 188, 191,
];

export const kickerHoleMesh = Mesh.fromArray(vertices, indexes);
