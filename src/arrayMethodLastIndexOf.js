'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    let inIndex = fromIndex;
    if (inIndex < 0) {
      inIndex = this.length + fromIndex;
    }

    for (let i = inIndex; i >= -1; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
