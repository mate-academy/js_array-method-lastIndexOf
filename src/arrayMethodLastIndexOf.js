/* eslint-disable max-len */
'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length - 1) {
    let posIndex;
    if (fromIndex < 0) { posIndex = this.length + fromIndex; } else { posIndex = fromIndex; }
    for (posIndex; posIndex >= 0; posIndex--) {
      if (Number.isNaN(this[posIndex]) && Number.isNaN(searchElement)) {
        return posIndex;
      }
      if (this[posIndex] === searchElement) {
        return posIndex;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
