'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let start = 0;
    if (searchElement === undefined) {
      return -1;
    }

    start = (fromIndex < 0) ? -fromIndex : fromIndex;
    for (let i = this.length - start || this.length - 1; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
