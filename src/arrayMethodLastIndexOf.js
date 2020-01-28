'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (arguments.length === 0) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (fromIndex >= this.length) {
      searchFrom = this.length;
    } else if (fromIndex < 0) {
      searchFrom = this.length + searchFrom;
    }

    if (searchFrom < 0) {
      return -1;
    }

    for (let index = searchFrom; index >= 0; index--) {
      if (
        (Number.isNaN(searchElement) && Number.isNaN(this[index]))
        || searchElement === this[index]
      ) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
