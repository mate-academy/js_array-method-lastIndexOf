'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (searchElement === undefined) {
      return -1;
    }

    let i;

    if (typeof fromIndex === 'number') {
      fromIndex < 0
        ? i = fromIndex + this.length
        : i = fromIndex;
    } else {
      i = this.length - 1;
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
