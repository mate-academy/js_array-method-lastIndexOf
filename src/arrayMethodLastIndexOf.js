'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let fromIndexCopy = fromIndex;
    if (this.length === 0 || searchElement === undefined) {
      return -1;
    }
    if (fromIndexCopy < 0) {
      fromIndexCopy += this.length;
    }

    for (let i = fromIndexCopy; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
