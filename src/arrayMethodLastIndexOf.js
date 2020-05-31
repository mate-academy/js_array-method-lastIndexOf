'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    let searchStartIndex = fromIndex;

    searchStartIndex >= 0
      ? searchStartIndex = fromIndex
      : searchStartIndex = this.length + fromIndex;

    for (let i = searchStartIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    };

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
