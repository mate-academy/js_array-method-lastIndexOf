'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (arguments.length === 0) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (searchFrom > this.length) {
      searchFrom = this.length;
    } else if (searchFrom < 0) {
      searchFrom += this.length;
    }

    for (let index = searchFrom; index >= 0; index--) {
      if (searchElement === this[index]
         || (Number.isNaN(searchElement) && Number.isNaN(this[index]))
      ) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
