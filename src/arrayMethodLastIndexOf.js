'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    if (this.length === 0 || arguments.length < 1) {
      return -1;
    }

    let indexFrom = fromIndex;

    if (indexFrom < 0) {
      indexFrom = this.length - Math.abs(indexFrom);

      if (indexFrom < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i >= 0; i--) {
      if (this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
