'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let start = this.length - 1;

    if (fromIndex !== undefined) {
      start = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    }

    for (let i = start; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
