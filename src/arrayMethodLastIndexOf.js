'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement, fromIndex = this.length - 1) {
    let currentIndex = fromIndex < 0 ? fromIndex + this.length : fromIndex;
    let foundIndex = -1;

    while (foundIndex < 0 && currentIndex >= 0) {
      if (this[currentIndex] === searchElement) {
        foundIndex = currentIndex;
      }
      currentIndex--;
    }

    return foundIndex;
  };
}

module.exports = applyCustomLastIndexOf;
