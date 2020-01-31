'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1) {
    let searchFrom = fromIndex;

    if (searchFrom >= 0) {
      searchFrom = this.length - 1;
    }

    if (searchFrom < 0) {
      searchFrom = this.length + searchFrom;
    }

    for (let i = searchFrom; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
