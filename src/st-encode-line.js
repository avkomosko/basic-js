import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';
	for (let i = 0; i < str.length; i++) {
		let count = 1;
		while (i < str.length - 1 && str[i] == str[i + 1]) {
			count++;
			i++;
		}
    if (count > 1) {
      result += count;
    }
		
		result += str[i];
	}
	return result;
}
