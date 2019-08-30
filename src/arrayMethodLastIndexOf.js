'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (this.length === 0 || searchElement === undefined) {
      return -1;
    }

    let i = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (i - 1; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
