'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let lastIndex = -1;
    let innerFromIndex = this.length - 1;

    if (fromIndex < 0) {
      innerFromIndex = this.length + fromIndex;
    }

    if (!this.length || searchElement === undefined) {
      return -1;
    }

    for (let i = innerFromIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        if (i > lastIndex) {
          lastIndex = i;
        }
      }
    }

    return lastIndex;
  };
}

module.exports = applyCustomLastIndexOf;
