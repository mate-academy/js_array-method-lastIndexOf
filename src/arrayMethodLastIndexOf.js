'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const to = arguments.length < 2 ? 0 : fromIndex;
    let i = fromIndex > 0 || fromIndex === undefined
      ? this.length - 1
      : this.length + fromIndex;

    for (i; i > to; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
