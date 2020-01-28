'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function lastIndexOf2(searchElement,
    fromIndex = 0) {
    if (fromIndex > this.length || arguments.length === 0) {
      return -1;
    }

    for (let index = this.length + fromIndex; index >= 0; index--) {
      if (searchElement === this[index]) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
