'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (arguments.length === 0) {
      return -1;
    }

    const fromIn = (fromIndex || this.length);

    if (fromIn >= 0) {
      for (let i = fromIn; i >= 0; i--) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    } else {
      for (let i = this.length + fromIn; i >= 0; i--) {
        if (searchElement === this[i]) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
