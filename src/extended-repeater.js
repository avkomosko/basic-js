import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let result = '';
  let separator = options.separator || '+';
  let inputAddition = '';
  inputAddition += options.addition;
  let resultAddition = '';
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator || '|';
  if (additionRepeatTimes > 1) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j < additionRepeatTimes - 1) {
        resultAddition += `${inputAddition}` + `${additionSeparator}`;
      } else if (j === additionRepeatTimes - 1) {
        resultAddition += `${inputAddition}`;
      }
      console.log(inputAddition, resultAddition);
    }
    console.log(resultAddition);
  } else {
    resultAddition += `${inputAddition}`;
  }
  
  if (!options.repeatTimes || options.repeatTimes === 1) {
    if (!inputAddition || !resultAddition) {
      return str;
    } else {
      result += str + `${resultAddition}`;
    }
  } else if (options.repeatTimes > 1) {
      for (let i = 0; i < options.repeatTimes; i++) {
      if (i < options.repeatTimes - 1) {
        result += str + `${resultAddition}` + `${separator}`;
      } else if (i === options.repeatTimes - 1) {
        result += str + `${resultAddition}`;
      }
    }
  }
  
  return result;
}
