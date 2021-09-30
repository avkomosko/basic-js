import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode;
  }

  encrypt(string, key) {
    if (string === '' || key === '' || string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    string = string.toUpperCase();
	  key = key.toUpperCase();
    let kf = Math.ceil(string.length / key.length);
    key = key.repeat(kf);
    const codeA = 'A'.charCodeAt(0);
    const abcCount = 26;
    
    let result =[];

    for (let i = 0; i < string.length; i++) {
     if (!/[A-Z]/.test(string[i])) {
        result.push(string[i]);
        key = key.slice(0, i) + " " + key.slice(i);
      } else {
        let charIndex = string.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        result.push(String.fromCharCode(codeA + (charIndex + shift) % abcCount));
      }
    }
    return (this.mode === '' || this.mode === true || !this.mode) ? result.join('') : result.reverse().join('');
  }

  decrypt(string, key) {
    if (string === '' || key === '' || string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    string = string.toUpperCase();
    key = key.toUpperCase();
    let kf = Math.ceil(string.length / key.length);
    key = key.repeat(kf);
    const codeA = 'A'.charCodeAt(0);
    const abcCount = 26;

    let result =[];

    for (let i = 0; i < string.length; i++) {
      if (!/[A-Z]/.test(string[i])) {
        result.push(string[i]);
        key = key.slice(0, i) + " " + key.slice(i);
      } else {
        let charIndex = string.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        result.push(String.fromCharCode(codeA + (charIndex - shift + abcCount) % abcCount));
      }
    }
    return (this.mode === '' || this.mode === true || !this.mode) ? result.join('') : result.reverse().join('');
  }
}
