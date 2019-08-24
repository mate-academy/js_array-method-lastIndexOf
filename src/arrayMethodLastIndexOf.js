'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    if (searchElement === undefined) {
      return -1;
    }

    let i = fromIndex < 0 ? fromIndex + this.length : fromIndex;

    for (i; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
