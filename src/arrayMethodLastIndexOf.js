'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let startIndex = fromIndex;

    if (fromIndex < 0) {
      startIndex += this.length;
    }
    if (fromIndex !== undefined) {
      for (let i = startIndex; i >= 0; i--) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    }
    for (let i = this.length - 1; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
