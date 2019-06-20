'use strict';

/**
 * Implement method lastIndexOf
 */

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = -1) {
    let result = -1;
    for (let i = this.length + fromIndex; i >= 0; i--) {
      if (searchElement === this[i]) {
        result = i;
        return result;
      }
    }
    return result;
  };
}

module.exports = applyCustomLastIndexOf;
