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
	[0.219287, 0.085466, 0.706049, 0.413000, 0.000000, -0.910700, 0.075225, 0.598375],
	[0.310148, 0.085466, 0.762633, 0.528600, 0.000000, -0.848900, 0.112623, 0.598375],
	[0.219287, -0.024548, 0.706049, 0.413000, 0.000000, -0.910700, 0.075225, 0.629625],
	[0.310148, -0.024548, 0.762633, 0.528600, 0.000000, -0.848900, 0.112623, 0.629625],
	[0.104420, -0.024548, 0.671205, 0.195100, 0.000000, -0.980800, 0.037586, 0.629625],
	[0.104420, 0.085466, 0.671205, 0.195100, 0.000000, -0.980800, 0.037586, 0.598375],
	[-0.015037, 0.085466, 0.659439, -0.000000, 0.000000, -1.000000, 0.000000, 0.598375],
	[-0.015037, -0.024548, 0.659439, -0.000000, 0.000000, -1.000000, 0.000000, 0.629625],
	[-0.134494, -0.024548, 0.671205, -0.195100, 0.000000, -0.980800, 0.962414, 0.629625],
	[-0.015037, 0.085466, 0.659439, -0.000000, 0.000000, -1.000000, 1.000000, 0.598375],
	[-0.015037, -0.024548, 0.659439, -0.000000, 0.000000, -1.000000, 1.000000, 0.629625],
	[-0.134494, 0.085466, 0.671205, -0.195100, 0.000000, -0.980800, 0.962414, 0.598375],
	[-0.249361, 0.085466, 0.706049, -0.413000, 0.000000, -0.910700, 0.925299, 0.598375],
	[-0.249361, -0.024548, 0.706049, -0.413000, 0.000000, -0.910700, 0.925299, 0.629625],
	[-0.340222, -0.024548, 0.762633, -0.528600, 0.000000, -0.848900, 0.887772, 0.629625],
	[-0.340222, 0.085466, 0.762633, -0.528600, 0.000000, -0.848900, 0.887772, 0.598375],
	[-0.249361, 0.085466, 1.837464, -0.413000, 0.000000, 0.910700, 0.575217, 0.598375],
	[-0.340222, 0.085466, 1.780880, -0.528600, 0.000000, 0.848900, 0.612729, 0.598375],
	[-0.249361, -0.024548, 1.837464, -0.413000, 0.000000, 0.910700, 0.575217, 0.629625],
	[-0.340222, -0.024548, 1.780880, -0.528600, 0.000000, 0.848900, 0.612729, 0.629625],
	[-0.134494, -0.024548, 1.872308, -0.195100, 0.000000, 0.980800, 0.537578, 0.629625],
	[-0.134494, 0.085466, 1.872308, -0.195100, 0.000000, 0.980800, 0.537578, 0.598375],
	[-0.015037, 0.085466, 1.884074, 0.000000, 0.000000, 1.000000, 0.499976, 0.598375],
	[-0.015037, -0.024548, 1.884074, 0.000000, 0.000000, 1.000000, 0.499976, 0.629625],
	[0.104420, -0.024548, 1.872308, 0.195100, 0.000000, 0.980800, 0.462391, 0.629625],
	[0.104420, 0.085466, 1.872308, 0.195100, 0.000000, 0.980800, 0.462391, 0.598375],
	[0.219287, 0.085466, 1.837464, 0.413000, 0.000000, 0.910700, 0.425275, 0.598375],
	[0.219287, -0.024548, 1.837464, 0.413000, 0.000000, 0.910700, 0.425275, 0.629625],
	[0.310148, -0.024548, 1.780880, 0.528600, 0.000000, 0.848900, 0.387666, 0.629625],
	[0.310148, 0.085466, 1.780880, 0.528600, 0.000000, 0.848900, 0.387666, 0.598375],
	[-0.015037, 0.085466, 1.271757, 0.000000, 1.000000, -0.000000, 0.350456, 0.291785],
	[0.310148, 0.085466, 0.762633, 0.000000, 1.000000, -0.000000, 0.504679, 0.533243],
	[0.219287, 0.085466, 0.706049, 0.000000, 1.000000, -0.000000, 0.461587, 0.560079],
	[0.104420, 0.085466, 0.671205, 0.000000, 1.000000, -0.000000, 0.407110, 0.576604],
	[-0.015037, 0.085466, 0.659439, 0.000000, 1.000000, -0.000000, 0.350456, 0.582184],
	[-0.134494, 0.085466, 0.671205, 0.000000, 1.000000, -0.000000, 0.293802, 0.576604],
	[-0.249361, 0.085466, 0.706049, 0.000000, 1.000000, -0.000000, 0.239325, 0.560079],
	[-0.340222, 0.085466, 0.762633, 0.000000, 1.000000, -0.000000, 0.196232, 0.533243],
	[-0.340222, 0.085466, 1.780880, 0.000000, 1.000000, -0.000000, 0.196232, 0.050326],
	[-0.249361, 0.085466, 1.837464, 0.000000, 1.000000, -0.000000, 0.239325, 0.023490],
	[-0.134494, 0.085466, 1.872308, 0.000000, 1.000000, -0.000000, 0.293802, 0.006965],
	[-0.015037, 0.085466, 1.884074, 0.000000, 1.000000, -0.000000, 0.350456, 0.001385],
	[0.104420, 0.085466, 1.872308, 0.000000, 1.000000, -0.000000, 0.407110, 0.006965],
	[0.219287, 0.085466, 1.837464, 0.000000, 1.000000, -0.000000, 0.461587, 0.023490],
	[0.310148, 0.085466, 1.780880, 0.000000, 1.000000, -0.000000, 0.504679, 0.050326],
	[-0.015037, -0.024548, 1.271757, -0.000000, -1.000000, -0.000000, 0.168822, 0.857352],
	[0.219287, -0.024548, 0.706049, -0.000000, -1.000000, -0.000000, 0.116257, 0.984256],
	[0.310148, -0.024548, 0.762633, -0.000000, -1.000000, -0.000000, 0.095874, 0.971562],
	[0.104420, -0.024548, 0.671205, -0.000000, -1.000000, -0.000000, 0.142025, 0.992072],
	[-0.015037, -0.024548, 0.659439, -0.000000, -1.000000, -0.000000, 0.168822, 0.994712],
	[-0.134494, -0.024548, 0.671205, -0.000000, -1.000000, -0.000000, 0.195620, 0.992072],
	[-0.249361, -0.024548, 0.706049, -0.000000, -1.000000, -0.000000, 0.221387, 0.984256],
	[-0.340222, -0.024548, 0.762633, -0.000000, -1.000000, -0.000000, 0.241770, 0.971562],
	[-0.249361, -0.024548, 1.837464, -0.000000, -1.000000, -0.000000, 0.221387, 0.730449],
	[-0.340222, -0.024548, 1.780880, -0.000000, -1.000000, -0.000000, 0.241770, 0.743142],
	[-0.134494, -0.024548, 1.872308, -0.000000, -1.000000, -0.000000, 0.195620, 0.722632],
	[-0.015037, -0.024548, 1.884074, -0.000000, -1.000000, -0.000000, 0.168822, 0.719993],
	[0.104420, -0.024548, 1.872308, -0.000000, -1.000000, -0.000000, 0.142025, 0.722632],
	[0.219287, -0.024548, 1.837464, -0.000000, -1.000000, -0.000000, 0.116257, 0.730449],
	[0.310148, -0.024548, 1.780880, -0.000000, -1.000000, -0.000000, 0.095874, 0.743142],
	[-0.340222, -0.024548, 0.762633, -1.000000, 0.000000, -0.000000, 0.887772, 0.629625],
	[-0.340222, -0.024548, 1.780880, -1.000000, 0.000000, -0.000000, 0.612729, 0.629625],
	[-0.340222, 0.085466, 0.762633, -1.000000, 0.000000, -0.000000, 0.887772, 0.598375],
	[-0.340222, 0.085466, 1.780880, -1.000000, 0.000000, -0.000000, 0.612729, 0.598375],
	[0.310148, -0.024548, 0.762633, 1.000000, 0.000000, -0.000000, 0.112623, 0.629625],
	[0.310148, 0.085466, 0.762633, 1.000000, 0.000000, -0.000000, 0.112623, 0.598375],
	[0.310148, 0.085466, 1.780880, 1.000000, 0.000000, -0.000000, 0.387666, 0.598375],
	[0.310148, -0.024548, 1.780880, 1.000000, 0.000000, -0.000000, 0.387666, 0.629625],
	[0.234963, -0.024548, 1.496923, 1.000000, 0.000000, -0.000000, 0.858268, 0.199235],
	[0.234963, -0.049543, -0.103410, 1.000000, 0.000000, -0.000000, 0.872391, 0.580412],
	[0.234963, -0.024548, -0.103410, 1.000000, 0.000000, -0.000000, 0.858268, 0.580412],
	[0.234963, -0.049543, 1.496923, 1.000000, 0.000000, -0.000000, 0.872391, 0.199235],
	[-0.265037, -0.024548, 1.496923, 0.000000, 0.000000, 1.000000, 0.739176, 0.199235],
	[0.234963, -0.049543, 1.496923, 0.000000, 0.000000, 1.000000, 0.858172, 0.179279],
	[0.234963, -0.024548, 1.496923, 0.000000, 0.000000, 1.000000, 0.858268, 0.199235],
	[-0.265037, -0.049543, 1.496923, 0.000000, 0.000000, 1.000000, 0.739112, 0.179279],
	[-0.265037, -0.049543, -0.103410, -1.000000, 0.000000, -0.000000, 0.724978, 0.580412],
	[-0.265037, -0.049543, 1.496923, -1.000000, 0.000000, -0.000000, 0.724978, 0.199235],
	[-0.265037, -0.024548, 1.496923, -1.000000, 0.000000, -0.000000, 0.739176, 0.199235],
	[-0.265037, -0.024548, -0.103410, -1.000000, 0.000000, -0.000000, 0.739176, 0.580412],
	[0.234963, -0.024548, 1.496923, 0.000000, 1.000000, -0.000000, 0.858268, 0.199235],
	[-0.265037, -0.024548, -0.103410, 0.000000, 1.000000, -0.000000, 0.739176, 0.580412],
	[-0.265037, -0.024548, 1.496923, 0.000000, 1.000000, -0.000000, 0.739176, 0.199235],
	[0.234963, -0.024548, -0.103410, 0.000000, 1.000000, -0.000000, 0.858268, 0.580412],
	[0.234963, -0.049543, 1.496923, -0.000000, -1.000000, -0.000000, 0.872391, 0.199235],
	[-0.265037, -0.049543, 1.496923, -0.000000, -1.000000, -0.000000, 0.991483, 0.199235],
	[-0.265037, -0.049543, -0.103410, -0.000000, -1.000000, -0.000000, 0.991483, 0.580412],
	[0.234963, -0.049543, -0.103410, -0.000000, -1.000000, -0.000000, 0.872391, 0.580412],
	[0.111997, 0.085466, 1.219137, 0.165600, 0.983800, -0.068600, 0.987454, 0.119858],
	[-0.015037, 0.110515, 1.271757, 0.000000, 1.000000, -0.000000, 0.910599, 0.088024],
	[0.122464, 0.085466, 1.271757, 0.179200, 0.983800, 0.000000, 0.993786, 0.088024],
	[0.082191, 0.085466, 1.174529, 0.126700, 0.983800, -0.126700, 0.969421, 0.146846],
	[0.037582, 0.085466, 1.144722, 0.068600, 0.983800, -0.165600, 0.942433, 0.164879],
	[-0.015037, 0.085466, 1.134256, -0.000000, 0.983800, -0.179200, 0.910599, 0.171211],
	[-0.067656, 0.085466, 1.144722, -0.068600, 0.983800, -0.165600, 0.878764, 0.164879],
	[-0.112265, 0.085466, 1.174529, -0.126700, 0.983800, -0.126700, 0.851776, 0.146846],
	[-0.142071, 0.085466, 1.219137, -0.165600, 0.983800, -0.068600, 0.833744, 0.119858],
	[-0.152538, 0.085466, 1.271757, -0.179200, 0.983800, 0.000000, 0.827411, 0.088024],
	[-0.142071, 0.085466, 1.324376, -0.165600, 0.983800, 0.068600, 0.833744, 0.056189],
	[-0.112265, 0.085466, 1.368984, -0.126700, 0.983800, 0.126700, 0.851776, 0.029202],
	[-0.067656, 0.085466, 1.398790, -0.068600, 0.983800, 0.165600, 0.878764, 0.011169],
	[-0.015037, 0.085466, 1.409257, -0.000000, 0.983800, 0.179200, 0.910599, 0.004836],
	[0.037582, 0.085466, 1.398790, 0.068600, 0.983800, 0.165600, 0.942433, 0.011169],
	[0.082191, 0.085466, 1.368984, 0.126700, 0.983800, 0.126700, 0.969421, 0.029202],
	[0.111997, 0.085466, 1.324376, 0.165600, 0.983800, 0.068600, 0.987454, 0.056189],
	[0.247463, -0.119543, 1.959256, 1.000000, 0.000000, -0.000000, 0.498307, 0.679381],
	[0.247463, -0.269543, 0.621756, 1.000000, 0.000000, -0.000000, 0.530374, 0.961404],
	[0.247463, -0.119543, 0.621756, 1.000000, 0.000000, -0.000000, 0.498307, 0.961404],
	[0.247463, -0.269543, 1.959256, 1.000000, 0.000000, -0.000000, 0.530374, 0.679381],
	[-0.277537, -0.119543, 1.959256, 0.000000, 0.000000, 1.000000, 0.386403, 0.679381],
	[0.247463, -0.269543, 1.959256, 0.000000, 0.000000, 1.000000, 0.498307, 0.646116],
	[0.247463, -0.119543, 1.959256, 0.000000, 0.000000, 1.000000, 0.498307, 0.679381],
	[-0.277537, -0.269543, 1.959256, 0.000000, 0.000000, 1.000000, 0.386403, 0.646116],
	[-0.277537, -0.269543, 0.621756, -1.000000, 0.000000, -0.000000, 0.354738, 0.961404],
	[-0.277537, -0.269543, 1.959256, -1.000000, 0.000000, -0.000000, 0.354738, 0.679381],
	[-0.277537, -0.119543, 1.959256, -1.000000, 0.000000, -0.000000, 0.386403, 0.679381],
	[-0.277537, -0.119543, 0.621756, -1.000000, 0.000000, -0.000000, 0.386403, 0.961404],
	[0.247463, -0.119543, 1.959256, 0.000000, 1.000000, -0.000000, 0.498307, 0.679381],
	[-0.277537, -0.119543, 0.621756, 0.000000, 1.000000, -0.000000, 0.386403, 0.961404],
	[-0.277537, -0.119543, 1.959256, 0.000000, 1.000000, -0.000000, 0.386403, 0.679381],
	[0.247463, -0.119543, 0.621756, 0.000000, 1.000000, -0.000000, 0.498307, 0.961404],
	[-0.277537, -0.269543, 0.621756, -0.000000, 0.000000, -1.000000, 0.386403, 0.993296],
	[-0.277537, -0.119543, 0.621756, -0.000000, 0.000000, -1.000000, 0.386403, 0.961404],
	[0.247463, -0.269543, 0.621756, -0.000000, 0.000000, -1.000000, 0.498307, 0.993296],
	[0.247463, -0.119543, 0.621756, -0.000000, 0.000000, -1.000000, 0.498307, 0.961404],
	[0.259963, -0.269543, 1.971756, 1.000000, 0.000000, -0.000000, 0.572135, 0.851701],
	[0.259963, -0.319543, -0.103244, 1.000000, 0.000000, -0.000000, 0.995664, 0.829507],
	[0.259963, -0.269543, -0.103244, 1.000000, 0.000000, -0.000000, 0.995664, 0.851701],
	[0.259963, -0.319543, 1.971756, 1.000000, 0.000000, -0.000000, 0.572135, 0.829507],
	[-0.290037, -0.269543, 1.971756, 0.000000, 0.000000, 1.000000, 0.572135, 0.975116],
	[0.259963, -0.319543, 1.971756, 0.000000, 0.000000, 1.000000, 0.551487, 0.851701],
	[0.259963, -0.269543, 1.971756, 0.000000, 0.000000, 1.000000, 0.572135, 0.851701],
	[-0.290037, -0.319543, 1.971756, 0.000000, 0.000000, 1.000000, 0.551487, 0.975116],
	[-0.290037, -0.319543, -0.103244, -1.000000, 0.000000, -0.000000, 0.995664, 0.996290],
	[-0.290037, -0.319543, 1.971756, -1.000000, 0.000000, -0.000000, 0.572135, 0.996290],
	[-0.290037, -0.269543, 1.971756, -1.000000, 0.000000, -0.000000, 0.572135, 0.975116],
	[-0.290037, -0.269543, -0.103244, -1.000000, 0.000000, -0.000000, 0.995664, 0.975116],
	[0.259963, -0.269543, 1.971756, 0.000000, 1.000000, -0.000000, 0.572135, 0.851701],
	[-0.290037, -0.269543, -0.103244, 0.000000, 1.000000, -0.000000, 0.995664, 0.975116],
	[-0.290037, -0.269543, 1.971756, 0.000000, 1.000000, -0.000000, 0.572135, 0.975116],
	[0.259963, -0.269543, -0.103244, 0.000000, 1.000000, -0.000000, 0.995664, 0.851701],
	[0.259963, -0.319543, 1.971756, -0.000000, -1.000000, -0.000000, 0.572135, 0.829507],
	[-0.290037, -0.319543, 1.971756, -0.000000, -1.000000, -0.000000, 0.572135, 0.706020],
	[-0.290037, -0.319543, -0.103244, -0.000000, -1.000000, -0.000000, 0.995664, 0.706020],
	[0.259963, -0.319543, -0.103244, -0.000000, -1.000000, -0.000000, 0.995664, 0.829507],
];

const indexes = [
	60, 61, 62,
	63, 62, 61,
	0, 1, 2,
	2, 1, 3,
	4, 0, 2,
	4, 5, 0,
	7, 5, 4,
	6, 5, 7,
	8, 9, 10,
	8, 11, 9,
	13, 11, 8,
	12, 11, 13,
	14, 12, 13,
	14, 15, 12,
	16, 17, 18,
	18, 17, 19,
	20, 16, 18,
	20, 21, 16,
	23, 21, 20,
	22, 21, 23,
	24, 22, 23,
	24, 25, 22,
	27, 25, 24,
	26, 25, 27,
	28, 26, 27,
	28, 29, 26,
	30, 31, 32,
	30, 44, 31,
	30, 32, 33,
	30, 43, 44,
	30, 33, 34,
	30, 42, 43,
	30, 34, 35,
	30, 41, 42,
	30, 35, 36,
	30, 40, 41,
	30, 36, 37,
	30, 39, 40,
	37, 38, 30,
	30, 38, 39,
	45, 46, 47,
	47, 59, 45,
	45, 48, 46,
	45, 59, 58,
	45, 49, 48,
	45, 58, 57,
	45, 50, 49,
	45, 57, 56,
	45, 51, 50,
	45, 56, 55,
	45, 52, 51,
	45, 55, 53,
	45, 54, 52,
	45, 53, 54,
	64, 65, 66,
	66, 67, 64,
	68, 69, 70,
	68, 71, 69,
	72, 73, 74,
	72, 75, 73,
	76, 77, 78,
	79, 76, 78,
	80, 81, 82,
	80, 83, 81,
	84, 85, 86,
	87, 84, 86,
	88, 89, 90,
	91, 89, 88,
	90, 89, 104,
	92, 89, 91,
	104, 89, 103,
	93, 89, 92,
	103, 89, 102,
	94, 89, 93,
	102, 89, 101,
	95, 89, 94,
	101, 89, 100,
	96, 89, 95,
	100, 89, 99,
	97, 89, 96,
	99, 89, 98,
	98, 89, 97,
	105, 106, 107,
	105, 108, 106,
	109, 110, 111,
	109, 112, 110,
	113, 114, 115,
	116, 113, 115,
	117, 118, 119,
	117, 120, 118,
	121, 122, 123,
	124, 123, 122,
	125, 126, 127,
	125, 128, 126,
	129, 130, 131,
	129, 132, 130,
	133, 134, 135,
	136, 133, 135,
	137, 138, 139,
	137, 140, 138,
	141, 142, 143,
	144, 141, 143,
];

export const hitTargetT1SlimMesh = Mesh.fromArray(vertices, indexes);
