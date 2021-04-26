'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let i = fromIndex;

    if (isNaN(searchElement)) {
      return -1;
    }

    if (i < 0) {
      i = this.length + i;
    }

    if (i > this.length) {
      i = this.length;
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
