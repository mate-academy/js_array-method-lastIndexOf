'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    let i = fromIndex >= 0
      ? fromIndex
      : this.length + fromIndex;

    for (; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      };
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
