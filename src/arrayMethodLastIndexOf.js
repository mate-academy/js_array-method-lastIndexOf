'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let index;

    if (!arguments.length) {
      return -1;
    }

    if (fromIndex === Math.abs(fromIndex)) {
      index = fromIndex;
    } else {
      index = Math.abs(fromIndex) < this.length
        ? this.length - Math.abs(fromIndex)
        : this.length;
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
