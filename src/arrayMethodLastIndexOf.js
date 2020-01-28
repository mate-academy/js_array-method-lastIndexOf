'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (!arguments.length) {
      return -1;
    }

    let searchIndex = fromIndex;

    if (searchIndex <= 0) {
      searchIndex += this.length;
    }

    for (let i = searchIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
