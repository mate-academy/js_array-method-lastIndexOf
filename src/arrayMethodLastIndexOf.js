'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let start = fromIndex;
    if (start === undefined) {
      start = this.length - 1;
    }
    if (start < 0) {
      start = this.length + start;
    }
    for (let i = start; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
