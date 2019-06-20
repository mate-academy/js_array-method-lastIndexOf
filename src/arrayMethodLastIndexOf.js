'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement, fromIndex = this.length - 1
  ) {
    const index = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    for (let i = index; i >= 0; i--) {
      if (
        (Number.isNaN(this[i])
          && Number.isNaN(searchElement))
        || this[i] === searchElement
      ) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
