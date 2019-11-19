'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (fromIndex === undefined || fromIndex >= this.length) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = this.length - 1;
    }

    if (fromIndex < 0) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = fromIndex + this.length;
      if (fromIndex < 0) {
        return -1;
      }
    }

    for (let i = fromIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
