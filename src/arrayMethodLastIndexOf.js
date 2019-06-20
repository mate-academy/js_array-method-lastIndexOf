'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let indexFrom = 0;
    if (fromIndex < 0) {
      indexFrom = this.length + fromIndex;
    } else {
      indexFrom = fromIndex;
    }

    for (let i = indexFrom; i >= 0; i--) {
      if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }

      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
