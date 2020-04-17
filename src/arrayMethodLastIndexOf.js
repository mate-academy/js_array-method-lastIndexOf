'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index = this.length - 1;
    const elementExist = -1;

    if (fromIndex === null | fromIndex === undefined) {
      index = this.length - 1;
    }

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    if (index < 0 | (searchElement === undefined & fromIndex === undefined)) {
      return elementExist;
    }

    for (index; index >= 0; index--) {
      if (this[index] !== undefined
        & isNaN(this[index])
        & isNaN(searchElement)) {
        return index;
      }

      if (this[index] === searchElement) {
        return index;
      }
    }

    return elementExist;
  };
}

module.exports = applyCustomLastIndexOf;
