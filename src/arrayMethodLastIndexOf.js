'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    if (arguments.length === 0) {
      return -1;
    }

    let startSearch = 0;

    if (fromIndex >= 0) {
      startSearch = fromIndex;
    } else {
      startSearch = fromIndex + this.length;
    }

    for (let i = startSearch; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
