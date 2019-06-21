'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    let currentIndex = this.length - 1;
    if (fromIndex < 0) {
      currentIndex += fromIndex + 1;
    };

    for (currentIndex; currentIndex >= 0; currentIndex--) {
      if (this[currentIndex] === searchElement) {
        return currentIndex;
      } else if (Number.isNaN(this[currentIndex])
                && Number.isNaN(searchElement)) {
        return currentIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
