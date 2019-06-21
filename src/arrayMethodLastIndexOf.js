'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    const indexArr = (fromIndex >= 0) ? fromIndex : fromIndex + this.length;
    for (let index = indexArr; index >= 0; index--) {
      if (this[index] === searchElement) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
