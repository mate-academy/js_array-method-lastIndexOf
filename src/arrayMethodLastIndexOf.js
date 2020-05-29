'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let startIndex = fromIndex;

    if (startIndex < 0) {
      startIndex += this.length;
    } else if (startIndex >= this.length) {
      startIndex = this.length - 1;
    }

    for (let i = startIndex; i >= 0; i--) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
