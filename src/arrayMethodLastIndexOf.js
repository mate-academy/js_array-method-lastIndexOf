'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    // write code here
    const length = this.length;
    let startIndex = fromIndex;

    if (length < 0) {
      return -1;
    }

    if (searchElement === null) {
      return -1;
    }

    if (fromIndex < 0) {
      startIndex = fromIndex + length;
      if (startIndex < 0) {
        return -1;
      }
    } else if (fromIndex === undefined) {
      startIndex = length - 1;
    }

    if (startIndex >= length) {
      startIndex = length - 1;
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
