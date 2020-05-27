'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    let reassignedIndex = fromIndex;
    let lastIndex = -1;

    if (fromIndex < 0) {
      reassignedIndex = 0;
    } else if (fromIndex > this.length) {
      reassignedIndex = this.length - 1;
    }

    for (let i = reassignedIndex; i < this.length; i++) {
      if (!Number.isNaN(searchElement)) {
        if (this[i] === searchElement) {
          lastIndex = i;
        }
      } else {
        if (Number.isNaN(this[i])) {
          lastIndex = i;
        }
      }
    }

    return lastIndex;
  };
}

module.exports = applyCustomLastIndexOf;
