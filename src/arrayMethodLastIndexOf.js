'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex) {
    let newIndex = fromIndex || this.length;

    if (arguments.length === 0) {
      return -1;
    }

    if (newIndex < 0) {
      newIndex = this.length + fromIndex;
    }

    if (newIndex < 0) {
      newIndex = this.length;
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
