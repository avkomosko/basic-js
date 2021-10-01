import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let result = arr.slice();
	let position = [];
	let i = -1;
	while ((i = arr.indexOf(-1, i + 1)) > -1) {
		position.push(i);
	}
	let pos = position.slice();
	while (pos.length) {
		result.splice(pos.pop(), 1);
	}
	result.sort((a, b) => a - b);
	while (position.length) {
		result.splice(position.shift(), 0, -1);
	}
	return result;
}
