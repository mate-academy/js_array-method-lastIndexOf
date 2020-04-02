'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let startIndex = fromIndex;
    let findedIndex;

    if (fromIndex === undefined) {
      startIndex = this.length - 1;
    }

    if (searchElement === undefined) {
      return -1;
    }

    if (startIndex < 0) {
      startIndex += this.length;
    }

    if (startIndex < 0) {
      return;
    }

    for (let i = 0; i <= startIndex; i++) {
      if (Object.is(this[i], searchElement) || this[i] === searchElement) {
        findedIndex = i;
      }
    }

    if (findedIndex !== undefined) {
      return findedIndex;
    } else {
      return -1;
    }
  };
}

module.exports = applyCustomLastIndexOf;
