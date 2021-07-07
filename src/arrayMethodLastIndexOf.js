'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    if (arguments.length === 0) {
      return -1;
    }

    let i = fromIndex;

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    }

    for (i; i >= 0; i--) {
      if (this[i] === searchElement
        || (isNaN(searchElement) && Object.is(searchElement, this[i]))) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
