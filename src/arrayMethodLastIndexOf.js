'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2
  = function(searchElement, fromIndex = this.length) {
      let index = fromIndex;

      if (index < 0) {
        index += this.length;
      }

      if (index < 0) {
        index = this.length;
      }

      if (this.length === 0 || searchElement === undefined) {
        return -1;
      }

      for (let i = index; i >= 0; i--) {
        if (Object.is(this[i], searchElement)) {
          return i;
        }
      };

      return -1;
    };
}

module.exports = applyCustomLastIndexOf;
