import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.chain.push(`\( ${value} \)`);
    return this;
  },
  removeLink(position) {
    if (
      !position ||
      !Number.isInteger(position) ||
      position >= this.getLength() ||
      !this.chain.includes(position)
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      let pos = this.chain.indexOf(position);
      this.chain = this.chain.slice(0, pos).concat(this.chain.slice(pos + 1));
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  },
};
