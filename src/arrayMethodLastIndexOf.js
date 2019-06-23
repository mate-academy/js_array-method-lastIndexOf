'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length - 1) {
    let i = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    for (i; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }

      if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }
    }
    return -1;
  };
}
module.exports = applyCustomLastIndexOf;
