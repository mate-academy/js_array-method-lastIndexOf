'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    const from = fromIndex < 0 ? this.length + fromIndex
      : this.length - fromIndex;

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
