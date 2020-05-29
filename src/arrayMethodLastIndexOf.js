'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    if (this.length === 0 || (this.length + fromIndex) < 0) {
      return -1;
    }

    let i = 0;

    if (fromIndex < 0 && (this.length + fromIndex) > 0) {
      i = this.length + fromIndex;
    } else if (fromIndex >= this.length) {
      i = this.length - 1;
    } else {
      i = fromIndex;
    }

    for (i; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      } else if (i === 0) {
        return -1;
      }
    }
  };
}

module.exports = applyCustomLastIndexOf;
