'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index = this.length;

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    if (arguments.length === 0) {
      return -1;
    }

    for (let i = index; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
