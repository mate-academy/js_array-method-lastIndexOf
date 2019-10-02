'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let length = this.length - 1;

    if (!searchElement && searchElement !== '') {
      return -1;
    }

    if (fromIndex >= 0) {
      length = fromIndex;
    } else if (fromIndex < 0) {
      length = this.length + fromIndex;
    }

    for (let i = length; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
