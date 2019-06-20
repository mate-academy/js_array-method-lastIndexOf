'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2
  = function(searchElement, fromIndex = (this.length - 1)) {
      let newfromIndex = fromIndex;

      if (fromIndex < 0) {
        newfromIndex = (this.length + fromIndex);
      }

      for (let i = newfromIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }

      return -1;
    };
}

module.exports = applyCustomLastIndexOf;
