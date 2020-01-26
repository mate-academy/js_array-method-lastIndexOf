'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (this.length === 0 || arguments.length < 1) {
      return -1;
    }

    if (fromIndex < 0) {
      for (let i = this.length + fromIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }

    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
