const CustomError = require("../extensions/custom-error");

const chainMaker = {
  storage: [],
  getLength() {
    return chainMaker.storage.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    chainMaker.storage.push(String(value));
    return chainMaker;
  },
  removeLink(position) {
    const float = parseFloat(position);
    if (!Number.isNaN(float) && float % 1 === 0 && !(position < 1 || position > chainMaker.getLength())) {
      chainMaker.storage.splice(position - 1, 1);
      return chainMaker;
    }
    chainMaker.storage = [];
    throw new Error();
  },
  reverseChain() {
    chainMaker.storage.reverse();
    return chainMaker;
  },
  finishChain() {
    const result =  `( ${chainMaker.storage.join(' )~~( ')} )`;
    chainMaker.storage = [];
    return result;
  }
};

module.exports = chainMaker;
