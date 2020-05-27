'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    let curIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex;

    /* If the index is greater than or equal to the length of the array,
     the whole array will be searched. */
    if (curIndex >= this.length) {
      curIndex = this.length - 1;
    }

    for (curIndex; curIndex >= 0; curIndex--) {
      if (this[curIndex] === searchElement
        || (Number.isNaN(this[curIndex]) && Number.isNaN(searchElement))) {
        return curIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
