'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    if (this.length === 0 || searchElement === undefined) {
      return -1;
    }

    let newIndex = fromIndex;

    if (newIndex < 0) {
      newIndex += this.length;
    }

    for (let i = newIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
