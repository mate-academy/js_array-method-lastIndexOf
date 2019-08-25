'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (searchElement === undefined || this.length === 0) {
      return -1;
    }

    let result = -1;
    let i = this.length;

    if (fromIndex !== undefined) {
      i = fromIndex > 0 ? fromIndex : this.length + fromIndex;
    }

    for (i; i >= 0; i--) {
      if (this[i] === searchElement) {
        result = i;
        break;
      }
    }

    return result;
  };
}

module.exports = applyCustomLastIndexOf;
