'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2
  = function(searchElement, fromIndex = this.length) {
      if (searchElement === undefined) {
        return -1;
      }

      if (fromIndex < 0) {
        for (let i = this.length + fromIndex; i > -1; i--) {
          if (this[i] === searchElement) {
            return i;
          }
        }
        return -1;
      }
      for (let i = fromIndex - 1; i > -1; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
      return -1;
    };
}

module.exports = applyCustomLastIndexOf;
