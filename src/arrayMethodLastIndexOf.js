'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    // write code here
    let indexStart;
    const L = this.length;

    if (!fromIndex || (fromIndex > (L - 1))) {
      indexStart = L - 1;
    } else if (fromIndex < 0) {
      indexStart = L + fromIndex;
    } else {
      indexStart = fromIndex;
    }

    if (Number.isNaN(searchElement)) {
      for (let i = indexStart; i >= 0; i--) {
        if (Number.isNaN(this[i])) {
          return i;
        }
      }
    }

    for (let i = indexStart; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
