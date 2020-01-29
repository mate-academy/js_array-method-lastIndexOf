'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex =
  this.length - 1) {
    // write code here
    if (arguments.length === 0 || fromIndex + this.length < 0) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    }

    if (searchFrom > this.length - 1) {
      searchFrom = this.length - 1;
    }

    for (let i = searchFrom; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
