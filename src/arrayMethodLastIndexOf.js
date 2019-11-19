'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    let index = fromIndex;
    if (arguments.length === 0) {
      return -1;
    }
    if (fromIndex < 0 && fromIndex + this.length < 0) {
      index = 0;
    }
    for (let i = this.length + index; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
