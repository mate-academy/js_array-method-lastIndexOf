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

    for (let i = fromIndexInt; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
