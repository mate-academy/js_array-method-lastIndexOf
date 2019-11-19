'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (fromIndex < 0) {
      fromIndex += this.length
    }
    if (searchElement === undefined) {
      return -1
    }
    for (let i = fromIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i
      }
    }
    return -1
};
}

module.exports = applyCustomLastIndexOf;
