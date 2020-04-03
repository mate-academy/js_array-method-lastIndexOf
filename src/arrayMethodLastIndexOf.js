'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let index = fromIndex;

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    if (this.length + fromIndex < 0) {
      return -1;
    }

    if (fromIndex >= this.length) {
      index = this.length - 1;
    }

    for (let i = index; i >= 0; i--) {
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
