'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let start = fromIndex;

    if (start < 0) {
      start = this.length + fromIndex;
    }

    if (start < 0) {
      return -1;
    }

    for (let i = start; i >= 0; i -= 1) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
