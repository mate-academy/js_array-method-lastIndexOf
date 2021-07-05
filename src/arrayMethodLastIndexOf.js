'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const thisArrLength = this.length;
    let start = thisArrLength - 1;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex && typeof fromIndex === 'number') {
      if (fromIndex >= 0) {
        start = fromIndex;
      } else {
        start = thisArrLength + fromIndex;
      }

      if (start > thisArrLength) {
        start = thisArrLength - 1;
      }

      if (start < 0) {
        return -1;
      }
    }

    for (let i = start; i >= 0; i--) {
      if (String(searchElement) === 'NaN') {
        if (String(this[i]) === 'NaN') {
          return i;
        };
      };

      if (this[i] === searchElement) {
        return i;
      };
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
