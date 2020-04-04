'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    // write code here

    let searchIndex = fromIndex;

    if (fromIndex >= this.length || !fromIndex) {
      searchIndex = this.length - 1;
    } else if (fromIndex < -this.length) {
      return -1;
    } else if (fromIndex >= -this.length && fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }

    for (let i = searchIndex; i >= 0; i--) {
      if (this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        return i;
      }
      continue;
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
