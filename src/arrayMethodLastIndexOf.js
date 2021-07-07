'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const from = fromIndex < 0 ? this.length + fromIndex
      : fromIndex > 0 ? fromIndex - 1
        : fromIndex === 0 ? 0
          : this.length;

    for (let i = from; i > -1; i--) {
      if (this[i] === searchElement
        && searchElement !== undefined) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
