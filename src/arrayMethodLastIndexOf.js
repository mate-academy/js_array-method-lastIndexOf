'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length) {
    let startIndex;

    if (fromIndex >= this.length) {
      startIndex = this.length - 1;
    } else if (fromIndex < 0) {
      if (this.length + fromIndex < 0) {
        return -1;
      }

      startIndex = this.length + fromIndex;
    } else {
      startIndex = fromIndex;
    }

    for (startIndex; startIndex >= 0; startIndex--) {
      if (searchElement === this[startIndex]) {
        return startIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
