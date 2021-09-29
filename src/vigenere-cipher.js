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
    // this.string =string;
    // this.key = key;
  }

  mode = '';

  encrypt(string, key) {
    if (this.string === '' || this.key === '' || this.string === undefined || this.key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    this.string = this.string.toUpperCase();
	  this.key = this.key.toUpperCase();
    let kf = Math.ceil(this.string.length / this.key.length);
    this.key = this.key.repeat(kf);
    const codeA = 'A'.charCodeAt(0);
    const abcCount = 26;
    
    let result =[];

    for (let i = 0; i < this.string.length; i++) {
     if (!/[A-Z]/.test(this.string[i])) {
        result.push(this.string[i]);
        this.key = this.key.slice(0, i) + " " + this.key.slice(i);
      } else {
        let charIndex = this.string.charCodeAt(i) - codeA;
        let shift = this.key.charCodeAt(i) - codeA;
        result.push(String.fromCharCode(codeA + (charIndex + shift) % abcCount));
      }
    }
    return (this.mode === '' || this.mode === true) ? result.join('') : result.reverse().join('');
  }

  decrypt(string, key) {
    if (this.string === '' || this.key === '' || this.string === undefined || this.key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    this.string = this.string.toUpperCase();
    this.key = this.key.toUpperCase();
    let kf = Math.ceil(this.string.length / this.key.length);
    this.key = this.key.repeat(kf);
    const codeA = 'A'.charCodeAt(0);
    const abcCount = 26;

    let result =[];

    for (let i = 0; i < this.string.length; i++) {
      if (!/[A-Z]/.test(this.string[i])) {
        result.push(this.string[i]);
        this.key = this.key.slice(0, i) + " " + this.key.slice(i);
      } else {
        let charIndex = this.string.charCodeAt(i) - codeA;
        let shift = this.key.charCodeAt(i) - codeA;
        result.push(String.fromCharCode(codeA + (charIndex - shift + abcCount) % abcCount));
      }
    }
    return (this.mode === '' || this.mode === true) ? this.result.join('') : this.result.reverse().join('');
  }
}
