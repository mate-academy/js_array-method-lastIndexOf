'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    const arrayLength = this.length;
    // if (arrayLength === 0) return -1;
    // if (fromIndex >= this.length) return -1;
    // if (searchElement === undefined) return -1;
    if (arrayLength === 0 || fromIndex >= this.length || searchElement === undefined) {
      return -1;
    }

    for (let i = fromIndex + this.length; i >= 0; i--) {
      if (searchElement === this[i]) return i;
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
