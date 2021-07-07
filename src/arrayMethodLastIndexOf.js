'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2
  = function(searchElement, fromIndex = (this.length - 1)) {
    // write code here
    let newIndex = fromIndex;

    if (fromIndex < 0) {
      newIndex = (this.length + fromIndex);
    }

    for (let i = newIndex; i > -1; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
