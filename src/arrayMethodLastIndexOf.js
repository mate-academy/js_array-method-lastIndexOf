'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    let loopStart = fromIndex;

    if (loopStart < 0) {
      loopStart = this.length + fromIndex;
    }

    if (loopStart < 0) {
      return -1;
    }

    for (let i = loopStart; i >= 0; i -= 1) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
