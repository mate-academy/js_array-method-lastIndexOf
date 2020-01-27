'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const startIndex = fromIndex || this.length - 1;

    if (startIndex >= 0) {
      for (let i = startIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    } else {
      for (let i = this.length + startIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
