'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (searchElement === undefined) {
      return -1;
    }

    let fromLastIndex = fromIndex;

    if (fromLastIndex < 0) {
      fromLastIndex += this.length;
    }

    for (let i = fromLastIndex; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
