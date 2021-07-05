'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const items = this;
    let startIndex = items.length;

    if (searchElement === undefined) {
      return -1;
    }

    if (fromIndex < 0) {
      startIndex = items.length + fromIndex;
    }

    for (let i = startIndex; i >= 0; i--) {
      if (Object.is(items[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
