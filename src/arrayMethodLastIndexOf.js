'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    // write code here
    let index = fromIndex;

    if (index >= this.length) {
      index = this.length - 1;
    }

    if (index < 0) {
      index = this.length + index;
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
