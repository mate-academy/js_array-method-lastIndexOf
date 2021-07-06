'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length - 1) {
    const result = -1;

    if (fromIndex < 0) {
      fromIndex = this.length + fromIndex;
    }

    for (let i = fromIndex; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return result;
  };
}

module.exports = applyCustomLastIndexOf;
