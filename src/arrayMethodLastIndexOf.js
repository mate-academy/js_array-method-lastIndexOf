'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index = fromIndex;
    let result = -1;

    if (index < 0) {
      index += this.length;
    } else {
      index = this.length - 1;
    }

    for (let i = index; i >= 0; i--) {
      if (this[i] === searchElement) {
        result = i;

        return result;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
