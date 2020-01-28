'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (!arguments.length) {
      return -1;
    }

    let i;

    if (Math.abs(fromIndex) < this.length) {
      i = this.length - Math.abs(fromIndex);
    } else {
      i = this.length;
    }

    for (i; i >= 0; i--) {
      if ((this[i] === searchElement)
        || (Number.isNaN(this[i])
        && Number.isNaN(searchElement))
      ) {
        return i;
      }
    }

    return -1;
  };
};

module.exports = applyCustomLastIndexOf;
