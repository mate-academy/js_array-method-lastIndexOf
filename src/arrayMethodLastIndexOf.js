'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    // write code here
    let i = fromIndex;

    if (searchElement === undefined) {
      return -1;
    }

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    }

    while (i >= 0) {
      if (this[i] === searchElement) {
        return i;
      }
      i--;
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
