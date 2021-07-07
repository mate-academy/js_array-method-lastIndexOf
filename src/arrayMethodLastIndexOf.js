'use strict';
/**
 * Implement method lastIndexOf
 */

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let searchFrom = fromIndex;

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    } else {
      searchFrom = this.length - 1;
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
