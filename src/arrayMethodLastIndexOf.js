'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(findElem, fromIndex = this.length - 1) {
    let index = fromIndex;

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    for (let i = index; i >= 0; i--) {
      if (this[i] === findElem) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
