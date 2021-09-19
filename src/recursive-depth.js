import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    if (arr.every((el) => !Array.isArray(el))) {
    return result;
    } else {
      let stack = [];
      for (let item of arr) {
        if (Array.isArray(item)) {
          stack.push(this.calculateDepth(item));
        }
      }
      result += Math.max.apply(0, stack);
    }
    return result;
  }
}