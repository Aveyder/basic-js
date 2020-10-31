const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const nestedDepths = [0];
    for (const el of arr) {
      if (Array.isArray(el)) {
        nestedDepths.push(this.calculateDepth(el));
      }
    }
    return 1 + Math.max(...nestedDepths);
  }
};
