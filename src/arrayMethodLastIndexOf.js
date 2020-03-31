'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2
  = function(searchElement, fromIndex = this.length - 1) {
      let position;

      if (fromIndex < 0) {
        position = this.length + fromIndex;
      } else {
        position = fromIndex;
      }

      for (let i = position; i >= 0; i--) {
        if (searchElement === this[i]) {
          return i;
        }
      }

      return -1;
    };
}

module.exports = applyCustomLastIndexOf;
