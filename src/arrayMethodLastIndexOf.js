'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (!arguments.length) {
      return -1;
    }

    let currentIndex = (fromIndex < 0) ? this.length + (fromIndex) : fromIndex;

    if (this.length + (fromIndex) < 0) {
      currentIndex = 0;
    }

    for (let i = currentIndex; i >= 0; i--) {
      if ((Number.isNaN(searchElement)
        && Number.isNaN(this[i]))
        || this[i] === searchElement
      ) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
