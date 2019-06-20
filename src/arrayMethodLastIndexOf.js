'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let startSearch = 0;
    if (fromIndex < 0) {
      startSearch = this.length + fromIndex;
    } else {
      startSearch = fromIndex;
    }

    for (let i = startSearch; i >= 0; i--) {
      if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }

      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
