'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let index = fromIndex;

    if (searchElement === undefined) {
      return -1;
    }

    if (index < 0) {
      index = this.length + fromIndex;
    }

    for (let i = index; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
