import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let height = matrix.length;
	let length = matrix[0].length;
	let result = 0;
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < length; j++) {
			if (matrix[i][j] === 0 && typeof matrix[i + 1] !== 'undefined') {
				matrix[i + 1][j] = 0;
			}
		}
	}
	for (let arr of matrix) {
		result += arr.reduce((sum, el) => sum + el, 0);
	}
	return result;
}
