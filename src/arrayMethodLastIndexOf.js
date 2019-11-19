'use strict';

/**
 * Implement method lastIndexOf
 */

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (searchElement === undefined) {
      return -1;
    }

    if (fromIndex >= 0) {
      for (let i = this.length; i > fromIndex; i--) {
        if (searchElement === this[i]
          || (isNaN(searchElement)
            && isNaN(searchElement) === isNaN(this[i]))) {
          return i;
        }
      }
    } else {
      for (let i = this.length + fromIndex; i >= 0; i--) {
        if (searchElement === this[i]
          || (isNaN(searchElement)
            && isNaN(searchElement) === isNaN(this[i]))) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
