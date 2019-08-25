'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    let index = fromIndex >= 0 ? this.length - 1 : this.length + fromIndex;

    for (; index > fromIndex; index--) {
      if (searchElement === this[index]) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
