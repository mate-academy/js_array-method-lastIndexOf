'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (this.length === 0) {
      return -1;
    }
    let fromIndexInt = fromIndex;
    if (typeof fromIndex === 'undefined') {
      fromIndexInt = this.length - 1;
    } else if (fromIndexInt < 0) {
      fromIndexInt = this.length + fromIndex;
      if (fromIndexInt < 0) {
        return -1;
      }
    }

    let i = fromIndexInt;
    while (true) {
      if (this[i] === searchElement) {
        return i;
      }
      i--;
      if (i < 0) {
        break;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
