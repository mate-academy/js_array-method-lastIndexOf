'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement = 0, fromIndex = 0) {
    let result = -1;
    const currentIndex = this.length - 1 - ((fromIndex < 0)
      ? Math.abs(fromIndex) - 1 : fromIndex);
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
