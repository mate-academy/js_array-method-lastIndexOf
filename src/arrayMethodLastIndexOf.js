'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length < 0 || !this.length) {
      return -1;
    }

    let startIndex;

    if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    } else {
      startIndex = this.length - 1;
    }

    for (let i = startIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
