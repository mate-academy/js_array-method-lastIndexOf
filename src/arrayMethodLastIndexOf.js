'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    if (this.length === 0 || arguments.length === 0) {
      return -1;
    }

    let start;

    if (fromIndex < 0) {
      start = this.length + fromIndex;
    } else {
      start = fromIndex;
    }

    if (fromIndex >= this.length) {
      return -1;
    }

    for (let i = start; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }

      if (isNaN(this[i]) && isNaN(searchElement) && this[i] !== undefined) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
