'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (fromIndex >= this.length || searchElement === undefined) {
      return -1;
    }

    let index = fromIndex;

    if (fromIndex < 0) {
      index = this.length + (index);
    }

    if (fromIndex === undefined || (-fromIndex) >= this.length) {
      index = this.length;
    }

    for (let i = index; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
