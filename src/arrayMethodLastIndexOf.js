'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  // eslint-disable-next-line max-len
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length - 1) {
    if (fromIndex > this.length || this.length === 0) {
      return -1;
    } else if (fromIndex < -this.length) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = this.length - 1;
    }

    if (fromIndex < 0) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = this.length + fromIndex;
    }

    for (let i = fromIndex; i >= 0; i--) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
