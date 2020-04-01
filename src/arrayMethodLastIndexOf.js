'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    let index = fromIndex;
    let result = -1;

    if (index < 0) {
      index += this.length;
    }

    for (let i = index; i >= 0; i--) {
      if (this[i] === searchElement) {
        result = i;

        return result;
      }
    }

    return result;
  };
}

module.exports = applyCustomLastIndexOf;
