'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (this.length === 0 || arguments.length === 0) {
      return -1;
    }
    let from = fromIndex;
    if (from < 0) {
      from = fromIndex + this.length;
    }
    if (from < 0) {
      from = this.length;
    }
    for (let i = from; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
