'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (arguments.length === 0) {
      return -1;
    }

    let i = this.length - 1;
    if (Number.isFinite(fromIndex) && fromIndex > 0
      && fromIndex < this.length) {
      i = fromIndex;
    } else if (Number.isFinite(fromIndex) && fromIndex < 0) {
      i = this.length + fromIndex;
    }

    for (i; i >= 0; i--) {
      if ((!isNaN(searchElement) && searchElement === this[i])
        || (isNaN(searchElement) && Object.is(searchElement, this[i]))) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
