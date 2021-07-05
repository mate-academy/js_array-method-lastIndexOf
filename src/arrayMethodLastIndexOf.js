'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    // write code here
    let searchIndex;

    if (!fromIndex) {
      searchIndex = this.length - 1;
    } else {
      searchIndex = fromIndex;
    }

    if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }

    for (let i = searchIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
