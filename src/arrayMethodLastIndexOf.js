'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length - 1) {
    const items = this;
    const index = -1;

    if (fromIndex < 0) {
      fromIndex += items.length;
    }

    for (let i = fromIndex; i >= 0; i--) {
      if (items[i] === searchElement) {
        return i;
      }
    }

    return index;
  };
}

module.exports = applyCustomLastIndexOf;
