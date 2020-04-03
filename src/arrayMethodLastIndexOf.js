'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let startIndex = fromIndex;

    if (startIndex === undefined) {
      startIndex = this.length - 1;
    }

    if (Math.abs(startIndex) >= this.length) {
      return -1;
    }

    if (startIndex < 0) {
      startIndex += this.length;
    }

    for (let i = startIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
