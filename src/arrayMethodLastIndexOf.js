'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let newIndex;

    if (fromIndex < 0) {
      newIndex = this.length + fromIndex;
    } else {
      newIndex = fromIndex - 1;
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
