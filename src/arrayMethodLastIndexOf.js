'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let newfromIndex = fromIndex;
    newfromIndex = this.length - 1;
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
