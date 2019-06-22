'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (searchElement !== undefined) {
      for (let i = this.length - Math.abs(fromIndex); i >= 0; i--) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
