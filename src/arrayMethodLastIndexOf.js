'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (arguments.length === 0) {
      return -1;
    }

    let index;

    if (fromIndex < -this.length) {
      index = this.length;
    } else if (fromIndex < 0) {
      index = this.length + fromIndex;
    } else {
      index = fromIndex;
    }

    for (let i = index; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      } else if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
