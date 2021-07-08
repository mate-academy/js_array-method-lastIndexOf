'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    let result = -1;
    let i;

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    } else {
      i = this.length - 1;
    }

    for (i; i > fromIndex; i -= 1) {
      if (this[i] === searchElement) {
        result = i;

        return result;
      }
    }

    return result;
  };
}

module.exports = applyCustomLastIndexOf;
