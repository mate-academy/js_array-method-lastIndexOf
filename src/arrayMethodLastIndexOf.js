'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let i = this.length - 1;

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    }

    for (i; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
