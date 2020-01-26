'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let index;

    if (Math.abs(fromIndex) < this.length) {
      index = this.length - Math.abs(fromIndex);
    } else {
      index = this.length;
    }

    for (let i = index; i >= 0; i--) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
