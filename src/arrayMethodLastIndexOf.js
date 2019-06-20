'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let realIndex = fromIndex;
    if (this.length < 1) {
      return -1;
    }

    if (fromIndex < 0) {
      realIndex += this.length;
    }

    for (let i = realIndex; i >= 0; i--) {
      if (searchElement === null) {
        return -1;
      }
      if (this[i] === searchElement) {
        return i;
      }
      continue;
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
