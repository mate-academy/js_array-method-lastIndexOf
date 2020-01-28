'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index;

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    } else {
      index = this.length - 1;
    }

    for (index; index >= 0; index--) {
      if ((Number.isNaN(searchElement)
        && Number.isNaN(this[index]))
        || this[index] === searchElement
      ) {
        return index;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
