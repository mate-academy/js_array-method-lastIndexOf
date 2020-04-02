'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const items = this;
    let indexFrom = fromIndex;

    if (!indexFrom) {
      indexFrom = items.length;
    }

    if (items.length < 0 || arguments.length < 1) {
      return -1;
    }

    if (indexFrom < 0) {
      indexFrom = items.length - Math.abs(indexFrom);

      if (indexFrom < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i >= 0; i--) {
      const argsIsNaN = Number.isNaN(items[i]) && Number.isNaN(searchElement);

      if (items[i] === searchElement || argsIsNaN) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
