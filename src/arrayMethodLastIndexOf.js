'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (searchElement === undefined || Math.abs(fromIndex) > this.length) {
      return -1;
    }

    const lastIndex = this.length + (fromIndex < 0 && fromIndex);

    for (let i = lastIndex; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
