'use strict';

/**
 * Implement method lastIndexOf
 */

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let i = 0;

    if (fromIndex < 0) {
      i = fromIndex + this.length;
    } else if (fromIndex > 0) {
      i = fromIndex;
    } else {
      i = this.length - 1;
    };

    for (i; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    };

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
