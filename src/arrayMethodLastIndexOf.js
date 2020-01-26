'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (arguments.length === 0 && searchElement !== '') {
      return -1;
    }

    let searchIndex;

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      searchIndex = 0;
    } else if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    } else {
      searchIndex = fromIndex;
    }

    for (let i = searchIndex; i >= 0; i--) {
      if ((Number.isNaN(searchElement) && Number.isNaN(this[i]))
      || this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
