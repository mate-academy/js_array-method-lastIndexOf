'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, from = this.length - 1) {
    let startIndex = from;

    if (from < (-this.length)) {
      startIndex = this.length - 1;
    } else if (from < 0 && from >= (-this.length)) {
      startIndex = this.length + from;
    }

    if (this.length === 0) {
      return -1;
    }

    for (let i = startIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
