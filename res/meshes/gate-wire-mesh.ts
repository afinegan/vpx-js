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
	[-0.384004, 0.000002, 0.001804, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, -0.004240, 0.006047, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, 0.000002, 0.007804, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, -0.005998, 0.001804, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, 0.004245, 0.006047, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, -0.004240, -0.002438, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, 0.006002, 0.001804, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, 0.000002, -0.004196, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[-0.384004, 0.004245, -0.002438, -1.000000, 0.000000, -0.000000, 0.500000, 0.500000],
	[0.011482, -0.004241, -0.172709, 0.479600, -0.670500, 0.566000, 0.500000, 0.500000],
	[0.012725, 0.000002, -0.171467, 0.652400, 0.000000, 0.757900, 0.500000, 0.500000],
	[-0.000004, 0.000002, -0.166195, 0.000000, 0.000000, 1.000000, 0.500000, 0.500000],
	[0.114512, -0.004241, -0.339680, 0.430000, -0.745900, 0.508700, 0.500000, 0.500000],
	[-0.000004, 0.004245, -0.167952, 0.000000, 0.663000, 0.748600, 0.500000, 0.500000],
	[0.111512, -0.005998, -0.342680, -0.044300, -0.997000, -0.062500, 0.500000, 0.500000],
	[-0.000004, -0.004241, -0.167952, 0.000000, -0.663000, 0.748600, 0.500000, 0.500000],
	[0.008483, -0.005998, -0.175709, 0.044400, -0.997000, 0.062600, 0.500000, 0.500000],
	[0.115754, 0.000002, -0.338437, 0.643100, 0.000000, 0.765700, 0.500000, 0.500000],
	[-0.000004, -0.005998, -0.172195, 0.000000, -0.995500, 0.094800, 0.500000, 0.500000],
	[0.011482, 0.004245, -0.172709, 0.479600, 0.670500, 0.566000, 0.500000, 0.500000],
	[0.119998, -0.004241, -0.341952, 0.136300, -0.726300, 0.673700, 0.500000, 0.500000],
	[-0.000004, 0.006002, -0.172195, 0.000000, 0.995500, 0.094800, 0.500000, 0.500000],
	[0.119998, -0.005998, -0.346195, -0.019600, -0.998700, -0.047300, 0.500000, 0.500000],
	[0.114512, 0.004245, -0.339680, 0.430000, 0.745800, 0.508700, 0.500000, 0.500000],
	[0.119998, 0.000002, -0.340195, 0.204900, 0.000000, 0.978800, 0.500000, 0.500000],
	[0.008483, 0.006002, -0.175709, 0.044400, 0.997000, 0.062600, 0.500000, 0.500000],
	[0.119998, 0.004245, -0.341952, 0.136300, 0.726300, 0.673700, 0.500000, 0.500000],
	[0.111512, 0.006002, -0.342680, -0.044300, 0.997000, -0.062500, 0.500000, 0.500000],
	[-0.000002, 0.004245, -0.176437, -0.000000, 0.757400, -0.652900, 0.500000, 0.500000],
	[0.005482, 0.004245, -0.178710, -0.430000, 0.745900, -0.508600, 0.500000, 0.500000],
	[0.119998, 0.006002, -0.346195, -0.019600, 0.998700, -0.047300, 0.500000, 0.500000],
	[0.108512, 0.004245, -0.345680, -0.479600, 0.670600, -0.565900, 0.500000, 0.500000],
	[-0.000002, 0.000002, -0.178195, -0.000100, 0.000000, -1.000000, 0.500000, 0.500000],
	[0.004240, 0.000002, -0.179952, -0.643100, -0.000000, -0.765700, 0.500000, 0.500000],
	[0.119998, 0.004245, -0.350437, -0.144700, 0.679400, -0.719300, 0.500000, 0.500000],
	[0.107269, 0.000002, -0.346923, -0.652400, 0.000000, -0.757900, 0.500000, 0.500000],
	[-0.000004, -0.004241, -0.176437, 0.000000, -0.757400, -0.652900, 0.500000, 0.500000],
	[0.005482, -0.004241, -0.178710, -0.430000, -0.745800, -0.508700, 0.500000, 0.500000],
	[0.119998, 0.000002, -0.352195, -0.186500, 0.000000, -0.982400, 0.500000, 0.500000],
	[0.108512, -0.004241, -0.345680, -0.479600, -0.670600, -0.565900, 0.500000, 0.500000],
	[0.119998, -0.004241, -0.350437, -0.144700, -0.679400, -0.719300, 0.500000, 0.500000],
	[0.221997, -0.004241, -0.350437, 0.144700, -0.679400, -0.719300, 0.500000, 0.500000],
	[0.221997, -0.005998, -0.346194, 0.019600, -0.998700, -0.047200, 0.500000, 0.500000],
	[0.221997, -0.004241, -0.341952, -0.136300, -0.726300, 0.673600, 0.500000, 0.500000],
	[0.221997, 0.000002, -0.352194, 0.186500, 0.000000, -0.982400, 0.500000, 0.500000],
	[0.221997, 0.000002, -0.340194, -0.204800, 0.000000, 0.978800, 0.500000, 0.500000],
	[0.221997, 0.004245, -0.350437, 0.144700, 0.679400, -0.719400, 0.500000, 0.500000],
	[0.221997, 0.004245, -0.341952, -0.136300, 0.726300, 0.673700, 0.500000, 0.500000],
	[0.221997, 0.006002, -0.346194, 0.019600, 0.998700, -0.047200, 0.500000, 0.500000],
	[0.226239, 0.000002, -0.338437, -0.707100, 0.000000, 0.707100, 0.500000, 0.500000],
	[0.227482, 0.004245, -0.339680, -0.461700, 0.757400, 0.461700, 0.500000, 0.500000],
	[0.230482, 0.006002, -0.342680, 0.067000, 0.995500, -0.067000, 0.500000, 0.500000],
	[0.233483, 0.004245, -0.345680, 0.529300, 0.663000, -0.529300, 0.500000, 0.500000],
	[0.234725, 0.000002, -0.346922, 0.707100, 0.000000, -0.707100, 0.500000, 0.500000],
	[0.233997, 0.006002, -0.334194, 0.047200, 0.998700, -0.019600, 0.500000, 0.500000],
	[0.233483, -0.004241, -0.345680, 0.529300, -0.663000, -0.529300, 0.500000, 0.500000],
	[0.238240, 0.004245, -0.334194, 0.719300, 0.679400, -0.144700, 0.500000, 0.500000],
	[0.239998, 0.000002, -0.334194, 0.982400, 0.000000, -0.186500, 0.500000, 0.500000],
	[0.230482, -0.005998, -0.342680, 0.067000, -0.995500, -0.067000, 0.500000, 0.500000],
	[0.238240, -0.004241, -0.334194, 0.719300, -0.679400, -0.144700, 0.500000, 0.500000],
	[0.227482, -0.004241, -0.339680, -0.461700, -0.757400, 0.461700, 0.500000, 0.500000],
	[0.233997, -0.005998, -0.334194, 0.047200, -0.998700, -0.019500, 0.500000, 0.500000],
	[0.229755, -0.004241, -0.334194, -0.673700, -0.726300, 0.136300, 0.500000, 0.500000],
	[0.227997, 0.000002, -0.334194, -0.978800, 0.000000, 0.204900, 0.500000, 0.500000],
	[0.229755, -0.004241, -0.010194, -0.719200, -0.679500, 0.144700, 0.500000, 0.500000],
	[0.229755, 0.004245, -0.334194, -0.673700, 0.726300, 0.136300, 0.500000, 0.500000],
	[0.227996, 0.000002, -0.010194, -0.982400, 0.000000, 0.186500, 0.500000, 0.500000],
	[0.229755, 0.004245, -0.010194, -0.719200, 0.679500, 0.144700, 0.500000, 0.500000],
	[0.233997, 0.006002, -0.010194, -0.047300, 0.998700, 0.019600, 0.500000, 0.500000],
	[0.238240, 0.004245, -0.010194, 0.673700, 0.726300, -0.136300, 0.500000, 0.500000],
	[0.234512, 0.004245, 0.001291, -0.529300, 0.663100, 0.529300, 0.500000, 0.500000],
	[0.239996, 0.000002, -0.010194, 0.978800, 0.000000, -0.204900, 0.500000, 0.500000],
	[0.237511, 0.006002, -0.001709, -0.067100, 0.995500, 0.067100, 0.500000, 0.500000],
	[0.240511, 0.004245, -0.004709, 0.461700, 0.757400, -0.461700, 0.500000, 0.500000],
	[0.238240, -0.004241, -0.010194, 0.673700, -0.726300, -0.136300, 0.500000, 0.500000],
	[0.241754, 0.000002, -0.005952, 0.707100, 0.000000, -0.707100, 0.500000, 0.500000],
	[0.233997, -0.005998, -0.010194, -0.047300, -0.998700, 0.019600, 0.500000, 0.500000],
	[0.240511, -0.004241, -0.004709, 0.461700, -0.757400, -0.461700, 0.500000, 0.500000],
	[0.237511, -0.005998, -0.001709, -0.067100, -0.995500, 0.067000, 0.500000, 0.500000],
	[0.234512, -0.004241, 0.001291, -0.529300, -0.663100, 0.529300, 0.500000, 0.500000],
	[0.245996, -0.004241, -0.002437, 0.136300, -0.726300, -0.673700, 0.500000, 0.500000],
	[0.233268, 0.000002, 0.002534, -0.707100, 0.000000, 0.707100, 0.500000, 0.500000],
	[0.245996, -0.005998, 0.001806, -0.019600, -0.998700, 0.047300, 0.500000, 0.500000],
	[0.245996, -0.004241, 0.006048, -0.144700, -0.679400, 0.719300, 0.500000, 0.500000],
	[0.245996, 0.000002, 0.007806, -0.186500, 0.000000, 0.982400, 0.500000, 0.500000],
	[0.383997, -0.005998, 0.001806, -0.000000, -1.000000, 0.000000, 0.500000, 0.500000],
	[0.383997, -0.004241, 0.006049, -0.000000, -0.707100, 0.707100, 0.500000, 0.500000],
	[0.383997, -0.004241, -0.002437, -0.000000, -0.707100, -0.707100, 0.500000, 0.500000],
	[0.383997, 0.000002, 0.007806, 0.000000, 0.000000, 1.000000, 0.500000, 0.500000],
	[0.383997, 0.000002, -0.004194, -0.000000, 0.000000, -1.000000, 0.500000, 0.500000],
	[0.245996, 0.004245, 0.006048, -0.144700, 0.679400, 0.719300, 0.500000, 0.500000],
	[0.383997, 0.004244, 0.006049, -0.000000, 0.707100, 0.707100, 0.500000, 0.500000],
	[0.245996, 0.006002, 0.001806, -0.019600, 0.998700, 0.047300, 0.500000, 0.500000],
	[0.383997, 0.006002, 0.001806, 0.000000, 1.000000, 0.000000, 0.500000, 0.500000],
	[0.245996, 0.004245, -0.002437, 0.136300, 0.726300, -0.673700, 0.500000, 0.500000],
	[0.383997, 0.004244, -0.002437, 0.000000, 0.707100, -0.707100, 0.500000, 0.500000],
	[0.245996, 0.000002, -0.004194, 0.204900, -0.000000, -0.978800, 0.500000, 0.500000],
	[-0.234731, 0.000002, -0.346923, -0.707100, -0.000000, -0.707100, 0.500000, 0.500000],
	[-0.222003, 0.000002, -0.352195, -0.186600, 0.000000, -0.982400, 0.500000, 0.500000],
	[-0.222003, -0.004240, -0.350438, -0.144700, -0.679300, -0.719400, 0.500000, 0.500000],
	[-0.233488, -0.004240, -0.345681, -0.529300, -0.663000, -0.529400, 0.500000, 0.500000],
	[-0.120002, 0.000002, -0.352195, 0.186600, 0.000000, -0.982400, 0.500000, 0.500000],
	[-0.240002, 0.000002, -0.334195, -0.982400, -0.000000, -0.186500, 0.500000, 0.500000],
	[-0.120002, -0.004240, -0.350438, 0.144800, -0.679300, -0.719400, 0.500000, 0.500000],
	[-0.222003, -0.005998, -0.346195, -0.019600, -0.998700, -0.047200, 0.500000, 0.500000],
	[-0.238246, -0.004240, -0.334195, -0.719400, -0.679300, -0.144800, 0.500000, 0.500000],
	[-0.230488, -0.005998, -0.342681, -0.067100, -0.995500, -0.067100, 0.500000, 0.500000],
	[-0.120002, -0.005998, -0.346195, 0.019600, -0.998700, -0.047300, 0.500000, 0.500000],
	[-0.222003, -0.004240, -0.341953, 0.136300, -0.726300, 0.673700, 0.500000, 0.500000],
	[-0.234003, -0.005998, -0.334195, -0.047200, -0.998700, -0.019600, 0.500000, 0.500000],
	[-0.227488, -0.004240, -0.339681, 0.461700, -0.757300, 0.461800, 0.500000, 0.500000],
	[-0.120002, -0.004240, -0.341952, -0.136300, -0.726200, 0.673700, 0.500000, 0.500000],
	[-0.222003, 0.000002, -0.340195, 0.204800, 0.000000, 0.978800, 0.500000, 0.500000],
	[-0.229761, -0.004240, -0.334195, 0.673800, -0.726200, 0.136300, 0.500000, 0.500000],
	[-0.226246, 0.000002, -0.338438, 0.707100, -0.000000, 0.707000, 0.500000, 0.500000],
	[-0.120002, 0.000002, -0.340195, -0.204800, 0.000000, 0.978800, 0.500000, 0.500000],
	[-0.222003, 0.004245, -0.341953, 0.136200, 0.726300, 0.673700, 0.500000, 0.500000],
	[-0.228003, 0.000002, -0.334195, 0.978800, -0.000100, 0.204800, 0.500000, 0.500000],
	[-0.227488, 0.004245, -0.339681, 0.461700, 0.757400, 0.461700, 0.500000, 0.500000],
	[-0.120002, 0.004245, -0.341952, -0.136300, 0.726300, 0.673700, 0.500000, 0.500000],
	[-0.222003, 0.006002, -0.346195, -0.019600, 0.998700, -0.047200, 0.500000, 0.500000],
	[-0.229761, 0.004245, -0.334195, 0.673700, 0.726300, 0.136300, 0.500000, 0.500000],
	[-0.230488, 0.006002, -0.342681, -0.067100, 0.995500, -0.067000, 0.500000, 0.500000],
	[-0.120002, 0.006002, -0.346195, 0.019600, 0.998700, -0.047300, 0.500000, 0.500000],
	[-0.222003, 0.004245, -0.350438, -0.144700, 0.679400, -0.719400, 0.500000, 0.500000],
	[-0.234003, 0.006002, -0.334195, -0.047200, 0.998700, -0.019600, 0.500000, 0.500000],
	[-0.233488, 0.004245, -0.345681, -0.529300, 0.663000, -0.529300, 0.500000, 0.500000],
	[-0.120002, 0.004245, -0.350438, 0.144800, 0.679400, -0.719400, 0.500000, 0.500000],
	[-0.238246, 0.004245, -0.334195, -0.719400, 0.679400, -0.144700, 0.500000, 0.500000],
	[-0.238246, 0.004245, -0.010195, -0.673600, 0.726300, -0.136300, 0.500000, 0.500000],
	[-0.240004, 0.000002, -0.010195, -0.978800, -0.000100, -0.204800, 0.500000, 0.500000],
	[-0.238246, -0.004240, -0.010195, -0.673700, -0.726200, -0.136300, 0.500000, 0.500000],
	[-0.234004, 0.006002, -0.010195, 0.047200, 0.998700, 0.019600, 0.500000, 0.500000],
	[-0.234004, -0.005998, -0.010195, 0.047200, -0.998700, 0.019600, 0.500000, 0.500000],
	[-0.229761, 0.004245, -0.010195, 0.719400, 0.679300, 0.144800, 0.500000, 0.500000],
	[-0.229761, -0.004240, -0.010195, 0.719400, -0.679300, 0.144800, 0.500000, 0.500000],
	[-0.228004, 0.000002, -0.010195, 0.982400, -0.000000, 0.186600, 0.500000, 0.500000],
	[-0.237518, -0.005998, -0.001710, 0.067100, -0.995500, 0.067100, 0.500000, 0.500000],
	[-0.234519, -0.004240, 0.001290, 0.529300, -0.663000, 0.529300, 0.500000, 0.500000],
	[-0.233276, 0.000002, 0.002533, 0.707100, -0.000000, 0.707100, 0.500000, 0.500000],
	[-0.234519, 0.004245, 0.001290, 0.529300, 0.663000, 0.529300, 0.500000, 0.500000],
	[-0.237518, 0.006002, -0.001710, 0.067100, 0.995500, 0.067000, 0.500000, 0.500000],
	[-0.246003, 0.000002, 0.007805, 0.186600, 0.000000, 0.982400, 0.500000, 0.500000],
	[-0.240519, 0.004245, -0.004710, -0.461700, 0.757400, -0.461700, 0.500000, 0.500000],
	[-0.246003, 0.004245, 0.006047, 0.144700, 0.679400, 0.719300, 0.500000, 0.500000],
	[-0.246003, 0.006002, 0.001805, 0.019600, 0.998700, 0.047300, 0.500000, 0.500000],
	[-0.241760, 0.000002, -0.005953, -0.707200, -0.000100, -0.707000, 0.500000, 0.500000],
	[-0.384004, 0.006002, 0.001804, 0.000000, 1.000000, 0.000000, 0.500000, 0.500000],
	[-0.384004, 0.004245, 0.006047, -0.000000, 0.707100, 0.707100, 0.500000, 0.500000],
	[-0.384004, 0.004245, -0.002438, 0.000000, 0.707200, -0.707100, 0.500000, 0.500000],
	[-0.384004, 0.000002, 0.007804, 0.000000, 0.000000, 1.000000, 0.500000, 0.500000],
	[-0.246003, 0.004245, -0.002438, -0.136300, 0.726300, -0.673700, 0.500000, 0.500000],
	[-0.384004, 0.000002, -0.004196, -0.000000, 0.000000, -1.000000, 0.500000, 0.500000],
	[-0.246003, -0.004240, 0.006047, 0.144700, -0.679400, 0.719300, 0.500000, 0.500000],
	[-0.384004, -0.004240, 0.006047, -0.000000, -0.707100, 0.707100, 0.500000, 0.500000],
	[-0.246003, -0.005998, 0.001805, 0.019600, -0.998700, 0.047300, 0.500000, 0.500000],
	[-0.384004, -0.005998, 0.001804, -0.000000, -1.000000, 0.000000, 0.500000, 0.500000],
	[-0.246003, -0.004240, -0.002438, -0.136300, -0.726200, -0.673700, 0.500000, 0.500000],
	[-0.384004, -0.004240, -0.002438, -0.000000, -0.707100, -0.707100, 0.500000, 0.500000],
	[-0.240519, -0.004240, -0.004710, -0.461700, -0.757300, -0.461800, 0.500000, 0.500000],
	[-0.246003, 0.000002, -0.004195, -0.204900, -0.000000, -0.978800, 0.500000, 0.500000],
	[-0.011489, 0.004245, -0.172710, -0.479700, 0.670500, 0.565900, 0.500000, 0.500000],
	[-0.012731, 0.000002, -0.171467, -0.652300, 0.000000, 0.757900, 0.500000, 0.500000],
	[-0.008489, 0.006002, -0.175710, -0.044300, 0.997000, 0.062600, 0.500000, 0.500000],
	[-0.011489, -0.004241, -0.172710, -0.479700, -0.670500, 0.565900, 0.500000, 0.500000],
	[-0.005488, 0.004245, -0.178710, 0.430000, 0.745800, -0.508700, 0.500000, 0.500000],
	[-0.008489, -0.005998, -0.175710, -0.044300, -0.997000, 0.062600, 0.500000, 0.500000],
	[-0.004246, 0.000002, -0.179952, 0.643100, 0.000000, -0.765800, 0.500000, 0.500000],
	[-0.005488, -0.004241, -0.178710, 0.430000, -0.745800, -0.508700, 0.500000, 0.500000],
	[-0.107275, 0.000002, -0.346923, 0.652400, 0.000000, -0.757900, 0.500000, 0.500000],
	[-0.108518, -0.004240, -0.345680, 0.479700, -0.670500, -0.565900, 0.500000, 0.500000],
	[-0.111517, -0.005998, -0.342680, 0.044400, -0.997000, -0.062600, 0.500000, 0.500000],
	[-0.108518, 0.004245, -0.345680, 0.479600, 0.670600, -0.565900, 0.500000, 0.500000],
	[-0.114518, -0.004240, -0.339680, -0.430100, -0.745800, 0.508700, 0.500000, 0.500000],
	[-0.115761, 0.000002, -0.338438, -0.643100, 0.000000, 0.765700, 0.500000, 0.500000],
	[-0.114518, 0.004245, -0.339680, -0.430000, 0.745800, 0.508700, 0.500000, 0.500000],
	[-0.111517, 0.006002, -0.342680, 0.044400, 0.997000, -0.062600, 0.500000, 0.500000],
	[0.383997, 0.000002, 0.001806, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, 0.004244, 0.006049, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, 0.000002, 0.007806, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, 0.006002, 0.001806, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, -0.004241, 0.006049, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, 0.004244, -0.002437, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, -0.005998, 0.001806, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, 0.000002, -0.004194, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
	[0.383997, -0.004241, -0.002437, 1.000000, -0.000000, -0.000000, 0.500000, 0.500000],
];

const indexes = [
	0, 1, 2,
	0, 3, 1,
	0, 2, 4,
	0, 5, 3,
	0, 4, 6,
	0, 7, 5,
	0, 6, 8,
	0, 8, 7,
	9, 10, 11,
	10, 9, 12,
	11, 10, 13,
	9, 14, 12,
	19, 13, 10,
	10, 12, 17,
	17, 19, 10,
	11, 15, 9,
	17, 12, 20,
	16, 9, 15,
	9, 16, 14,
	22, 20, 12,
	12, 14, 22,
	20, 24, 17,
	40, 22, 14,
	17, 24, 23,
	23, 19, 17,
	14, 39, 40,
	16, 39, 14,
	23, 25, 19,
	16, 37, 39,
	25, 21, 19,
	13, 19, 21,
	37, 16, 18,
	15, 18, 16,
	13, 21, 163,
	15, 164, 18,
	163, 161, 13,
	11, 13, 161,
	11, 162, 15,
	161, 162, 11,
	164, 15, 162,
	161, 163, 176,
	162, 161, 175,
	161, 176, 175,
	174, 164, 162,
	162, 175, 174,
	166, 18, 164,
	173, 164, 174,
	173, 166, 164,
	174, 175, 119,
	18, 166, 36,
	18, 36, 37,
	174, 115, 173,
	119, 115, 174,
	171, 166, 173,
	123, 119, 175,
	175, 176, 123,
	111, 173, 115,
	173, 111, 171,
	115, 119, 116,
	171, 168, 166,
	168, 36, 166,
	111, 115, 112,
	116, 112, 115,
	107, 171, 111,
	120, 116, 119,
	119, 123, 120,
	112, 108, 111,
	107, 111, 108,
	116, 114, 112,
	171, 107, 170,
	170, 168, 171,
	114, 116, 118,
	120, 118, 116,
	112, 114, 110,
	110, 108, 112,
	118, 117, 114,
	113, 110, 114,
	114, 117, 113,
	108, 110, 106,
	118, 120, 122,
	108, 104, 107,
	106, 104, 108,
	117, 118, 121,
	122, 121, 118,
	103, 107, 104,
	103, 170, 107,
	124, 122, 120,
	124, 120, 123,
	170, 103, 169,
	123, 127, 124,
	127, 123, 176,
	169, 167, 170,
	170, 167, 168,
	176, 172, 127,
	163, 172, 176,
	168, 167, 32,
	32, 36, 168,
	163, 165, 172,
	165, 163, 21,
	165, 169, 172,
	165, 167, 169,
	172, 169, 101,
	101, 127, 172,
	101, 169, 103,
	167, 165, 28,
	21, 28, 165,
	28, 32, 167,
	21, 25, 28,
	101, 103, 99,
	104, 99, 103,
	127, 101, 98,
	99, 98, 101,
	98, 124, 127,
	100, 99, 104,
	104, 106, 100,
	97, 98, 99,
	99, 100, 97,
	98, 126, 124,
	126, 98, 97,
	122, 124, 126,
	102, 97, 100,
	126, 125, 122,
	121, 122, 125,
	97, 128, 126,
	125, 126, 128,
	128, 97, 102,
	121, 125, 132,
	125, 128, 129,
	129, 132, 125,
	128, 102, 130,
	130, 129, 128,
	100, 105, 102,
	105, 100, 106,
	131, 130, 102,
	102, 105, 131,
	106, 109, 105,
	109, 106, 110,
	110, 113, 109,
	133, 131, 105,
	105, 109, 133,
	109, 113, 135,
	135, 133, 109,
	136, 135, 113,
	113, 117, 136,
	137, 133, 135,
	117, 121, 134,
	134, 136, 117,
	132, 134, 121,
	138, 135, 136,
	135, 138, 137,
	134, 139, 136,
	136, 139, 138,
	132, 140, 134,
	139, 134, 140,
	129, 141, 132,
	140, 132, 141,
	153, 138, 139,
	140, 142, 139,
	139, 142, 153,
	141, 144, 140,
	142, 140, 144,
	141, 129, 143,
	130, 143, 129,
	142, 144, 148,
	148, 150, 142,
	153, 142, 150,
	147, 148, 144,
	150, 154, 153,
	144, 145, 147,
	144, 141, 145,
	143, 145, 141,
	149, 147, 145,
	155, 153, 154,
	138, 153, 155,
	155, 137, 138,
	154, 156, 155,
	145, 151, 149,
	145, 143, 151,
	152, 149, 151,
	157, 155, 156,
	137, 155, 157,
	156, 158, 157,
	158, 152, 160,
	160, 157, 158,
	151, 160, 152,
	157, 159, 137,
	159, 157, 160,
	133, 137, 159,
	159, 131, 133,
	151, 146, 160,
	160, 146, 159,
	146, 151, 143,
	131, 159, 146,
	143, 130, 146,
	146, 130, 131,
	29, 28, 25,
	32, 28, 29,
	27, 29, 25,
	27, 25, 23,
	29, 33, 32,
	36, 32, 33,
	33, 37, 36,
	31, 29, 27,
	31, 33, 29,
	37, 33, 35,
	35, 33, 31,
	37, 35, 39,
	23, 26, 27,
	26, 23, 24,
	27, 30, 31,
	30, 27, 26,
	31, 34, 35,
	34, 31, 30,
	39, 35, 38,
	38, 35, 34,
	38, 40, 39,
	46, 34, 30,
	44, 38, 34,
	34, 46, 44,
	41, 40, 38,
	38, 44, 41,
	48, 30, 26,
	30, 48, 46,
	47, 26, 24,
	26, 47, 48,
	24, 45, 47,
	45, 24, 20,
	47, 50, 48,
	20, 43, 45,
	43, 20, 22,
	45, 49, 47,
	50, 47, 49,
	42, 22, 40,
	22, 42, 43,
	40, 41, 42,
	45, 43, 60,
	60, 49, 45,
	43, 42, 58,
	58, 60, 43,
	42, 41, 55,
	55, 58, 42,
	49, 60, 62,
	53, 55, 41,
	41, 44, 53,
	60, 58, 61,
	61, 62, 60,
	58, 55, 59,
	59, 61, 58,
	55, 53, 57,
	57, 59, 55,
	53, 44, 52,
	46, 52, 44,
	57, 53, 56,
	52, 56, 53,
	48, 51, 46,
	52, 46, 51,
	51, 48, 50,
	56, 52, 54,
	51, 54, 52,
	50, 65, 51,
	54, 51, 65,
	49, 63, 50,
	65, 50, 63,
	62, 63, 49,
	68, 54, 65,
	67, 65, 63,
	65, 67, 68,
	66, 63, 62,
	63, 66, 67,
	69, 56, 54,
	54, 68, 69,
	62, 64, 66,
	64, 62, 61,
	56, 69, 71,
	71, 57, 56,
	61, 76, 64,
	76, 61, 59,
	74, 59, 57,
	59, 74, 76,
	57, 71, 74,
	64, 76, 78,
	76, 74, 77,
	77, 78, 76,
	74, 71, 75,
	75, 77, 74,
	69, 73, 71,
	75, 71, 73,
	68, 72, 69,
	73, 69, 72,
	77, 75, 96,
	73, 94, 75,
	96, 75, 94,
	72, 92, 73,
	94, 73, 92,
	72, 68, 70,
	67, 70, 68,
	94, 92, 93,
	93, 95, 94,
	96, 94, 95,
	91, 93, 92,
	95, 89, 96,
	92, 90, 91,
	92, 72, 90,
	70, 90, 72,
	88, 91, 90,
	80, 96, 89,
	96, 80, 77,
	78, 77, 80,
	89, 87, 80,
	90, 84, 88,
	90, 70, 84,
	86, 88, 84,
	82, 80, 87,
	80, 82, 78,
	87, 85, 82,
	85, 86, 83,
	83, 82, 85,
	84, 83, 86,
	79, 78, 82,
	82, 83, 79,
	78, 79, 64,
	66, 64, 79,
	83, 84, 81,
	81, 79, 83,
	81, 84, 70,
	79, 81, 66,
	70, 67, 81,
	66, 81, 67,
	177, 178, 179,
	177, 180, 178,
	177, 179, 181,
	177, 182, 180,
	177, 181, 183,
	177, 184, 182,
	177, 183, 185,
	177, 185, 184,
];

export const gateWireMesh = Mesh.fromArray(vertices, indexes);
