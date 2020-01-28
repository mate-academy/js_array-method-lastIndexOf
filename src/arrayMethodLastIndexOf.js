'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    let startIndex = fromIndex;

    if (fromIndex >= 0) {
      startIndex = fromIndex;
    } else {
      startIndex = this.length + startIndex;
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
