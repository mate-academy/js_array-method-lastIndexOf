'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement = 0, fromIndex = 0) {
    const checkIndex = function(arg) {
      if (arg < 0) {
        return arg + 1;
      } else {
        return -arg;
      }
    };
    let result = -1;
    const currentIndex = this.length - 1 + checkIndex(fromIndex);
    for (let i = currentIndex; i > -1; i--) {
      if (searchElement === this[i]) {
        result = i;
        return result;
      }
    }
    return result;
    // write code here
  };
}

module.exports = applyCustomLastIndexOf;
