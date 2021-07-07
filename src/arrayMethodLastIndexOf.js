'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (this.length === 0) {
      return -1;
    }
    if (searchElement === undefined) {
      return -1;
    }
    let step = fromIndex;
    if (step < 0) {
      step = this.length + (fromIndex);
    }
    for (let i = step; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
