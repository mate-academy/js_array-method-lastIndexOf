'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (!this.length) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    } else {
      searchFrom = this.length - 1;
    }

    for (let index = searchFrom; index >= 0; index--) {
      if (this[index] === searchElement) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
