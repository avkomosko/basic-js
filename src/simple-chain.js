import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`\( ${value} \)`);
    return this;
  },
  removeLink(position) {
    if (
      this.position === 0 || 
      !Number.isInteger(this.position) ||
      this.position >= this.getLength() -1 || 
      !this.chain.includes(this.position)
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    } 
    
    // let pos = this.chain.indexOf(this.position);
    this.chain = this.chain.slice(0, this.chain.indexOf(this.position)).concat(this.chain.slice(this.chain.indexOf(this.position)+1));
      
    return this.chain;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  }
};
