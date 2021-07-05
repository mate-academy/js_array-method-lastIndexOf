'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const index = -1;
    let startSearchFrom = this.length;

    if (fromIndex < 0) {
      startSearchFrom += fromIndex;
    } else if (fromIndex > 0) {
      startSearchFrom = fromIndex;
    } else if (fromIndex === 0) {
      startSearchFrom = 0;
    }

    if (searchElement || searchElement === '') {
      let indexOfArray = startSearchFrom;
      while (indexOfArray > -1) {
        if (this[indexOfArray] === searchElement) {
          return indexOfArray;
        }

        indexOfArray--;
      }
    }

    return index;
  };
}

module.exports = applyCustomLastIndexOf;
