'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (this.length === 0 || arguments.length < 1) {
      return -1;
    }

    let i = 0;

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    } else {
      i = this.length - 1;
    }

    for (; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
