'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(valueToFind, position) {
    let from;

    if (position >= this.length || !position) {
      from = this.length - 1;
    }

    if (position < 0) {
      from = this.length + position;
    }

    if (from < 0) {
      return -1;
    }

    for (let i = from; i >= 0; i--) {
      if ((valueToFind === this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
