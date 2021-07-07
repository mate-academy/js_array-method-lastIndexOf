'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    // write code here
    let withIndex = fromIndex;

    if (fromIndex >= this.length) {
      withIndex = this.length - 1;
    } else if (fromIndex < 0) {
      withIndex = this.length + fromIndex;
    }

    if (this.length === 0) {
      return -1;
    }

    for (let i = withIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
