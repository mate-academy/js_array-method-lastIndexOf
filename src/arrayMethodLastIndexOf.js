'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let searchFrom;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      searchFrom = 0;
    } else if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    } else {
      searchFrom = fromIndex;
    }

    for (let i = searchFrom; i >= 0; i--) {
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
