'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function (searchElement, fromIndex = this.length) {
    let i = fromIndex;

    if (searchElement === undefined) {
      return -1;
    }

    if (fromIndex < 0) {
      i = Math.max(this.length - Math.abs(i), 0);
    }

    for (i; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
