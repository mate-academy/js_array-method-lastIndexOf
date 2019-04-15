'use strict';

/**
 * Implement method lastIndexOf
 *
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (searchElement === undefined || fromIndex < (-this.length)) {
      return -1;
    }
    let index = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    for (index; index >= 0; index--) {
      if (searchElement === this[index]) {
        return index;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
