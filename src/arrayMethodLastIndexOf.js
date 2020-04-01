'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let start;

    if (fromIndex < 0) {
      start = this.length + fromIndex;
    } else {
      start = fromIndex;
    }

    if (start > this.length - 1) {
      start = this.length - 1;
    }

    for (let i = start; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
