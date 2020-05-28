'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2
    = function(searchElement, fromIndex = this.length - 1) {
      let i = fromIndex;

      if (searchElement === undefined) {
        return -1;
      }

      if (fromIndex < 0) {
        if (this.length + fromIndex < 0) {
          i = this.length - 1;
        } else {
          i = this.length + fromIndex;
        }
      } else {
        i = this.length + fromIndex;
      }

      for (i; i >= 0; i--) {
        if (this[i] === searchElement
          || (this[i] === null && searchElement === null)) {
          return i;
        }

        if (Number.isNaN(this[i])
        && Number.isNaN(searchElement)) {
          return i;
        }
      }

      return -1;
    };
}

module.exports = applyCustomLastIndexOf;
