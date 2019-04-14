'use strict';

/**
 * Implement method lastIndexOf
 *
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (searchElement === undefined) {
      return -1;
    }
    let index = fromIndex;
    if (fromIndex < 0) {
      if (fromIndex < (-this.length)) {
        return -1;
      }
      index = this.length + fromIndex;
    }
    for (index; index >= 0; index--) {
      if (typeof searchElement === typeof this[index]) {
        if (searchElement === this[index]) {
          return index;
        } else if (isNaN(searchElement) && isNaN(this[index])) {
          return index;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
