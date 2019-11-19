'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    // write code here
    let startPosition = fromIndex;

    if (fromIndex < 0) {
      startPosition = this.length + fromIndex;
    }
    if (fromIndex !== undefined) {
      for (let i = startPosition; i >= 0; i--) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    } else {
      for (let i = this.length - 1; i >= 0; i--) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
