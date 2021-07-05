'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    let index = fromIndex;
    let indexEnd = this.length - 1;

    if (index < 0) {
      indexEnd = this.length + index;
    } else if (index >= this.length - 1) {
      index = 0;
    }

    for (index; index < indexEnd; indexEnd--) {
      if (this[indexEnd] === searchElement) {
        return indexEnd;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
