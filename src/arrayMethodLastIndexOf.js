'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    let i = fromIndex >= 0 ? this.length - 1 : this.length + fromIndex;

    for (i; i > fromIndex; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
