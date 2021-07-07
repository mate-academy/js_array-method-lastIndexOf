'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let startIndex = fromIndex || this.length;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    }

    if (startIndex < 0) {
      startIndex = this.length;
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
