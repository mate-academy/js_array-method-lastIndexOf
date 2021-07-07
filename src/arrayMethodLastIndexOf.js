'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (searchElement === undefined) {
      return -1;
    };

    let i;
    fromIndex === undefined ? i = this.length : fromIndex < 0
      ? i = this.length + fromIndex : i = fromIndex;

    for (; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
