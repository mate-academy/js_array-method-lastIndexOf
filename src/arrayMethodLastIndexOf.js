'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (arguments.length === 0 && !searchElement) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    }

    if (searchFrom <= 0) {
      searchFrom = 0;
    }

    for (let i = searchFrom; i >= 0; i--) {
      if (
        searchElement === this[i]
        || (Number.isNaN(searchElement) && Number.isNaN(this[i]))
      ) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
