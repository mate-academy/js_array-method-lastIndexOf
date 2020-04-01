'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length - 1) {
    if (!this.length) {
      return -1;
    }

    let startIndex = fromIndex;

    if (startIndex < 0) {
      if ((this.length + startIndex) < 0) {
        startIndex = 0;
      } else {
        startIndex = this.length + startIndex;
      }
    }

    for (let i = startIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }

      if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
