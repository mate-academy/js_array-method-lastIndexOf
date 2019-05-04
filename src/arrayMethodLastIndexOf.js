'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const index = -1;
    let lengthOfArray = this.length;

    if (fromIndex < 0) {
      lengthOfArray += fromIndex;
    } else if (fromIndex > 0) {
      lengthOfArray = fromIndex;
    } else if (fromIndex === 0) {
      lengthOfArray = 0;
    }

    if (searchElement || searchElement === '') {
      let indexOfArray = lengthOfArray;
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
