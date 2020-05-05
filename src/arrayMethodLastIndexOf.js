'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    // write code here
    let index = fromIndex;

    if (fromIndex === undefined) {
      index = this.length - 1;
    }

    if (index < 0) {
      index += this.length;

      if (index < 0) {
        index = this.length - 1;
      }
    }

    for (let i = index; i >= 0; i--) {
      if ((searchElement === undefined && this[i] === undefined)
        || (Number.isNaN(searchElement) && Number.isNaN(this[i]))
        || searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
