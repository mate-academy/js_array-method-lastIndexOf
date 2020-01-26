'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0) {
      const negIndex = this.length + fromIndex;

      for (let i = negIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }

    for (let i = this.length; i > 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
