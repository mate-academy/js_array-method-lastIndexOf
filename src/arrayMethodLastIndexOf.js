'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    let startIndex = fromIndex;

    const countedIndex = this.length + startIndex;

    if (startIndex >= this.length || fromIndex === 0) {
      startIndex = this.length - 1;
    } else if ((startIndex < 0) && (countedIndex > 0)) {
      startIndex = countedIndex;
    } else if (countedIndex < 0) {
      return -1;
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
