'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (searchElement === undefined) {
      return -1;
    } else {
      let searchIndex = (fromIndex < 0 ? this.length + fromIndex : fromIndex);
      for (let i = searchIndex; i >= 0; i--) {
        if (Object.is(this[i], searchElement)) {
          return i;
        }
      }
      return -1;
    };
  };
}
module.exports = applyCustomLastIndexOf;
