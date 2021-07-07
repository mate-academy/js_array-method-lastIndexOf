'use strict';

/**
 * Implement method lastIndexOf
 */
function isEqual(x1, x2) {
  return x1 === x2 || (Number.isNaN(x1) && Number.isNaN(x2));
}

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0 || fromIndex >= this.length) {
      return -1;
    }

    for (let i = this.length + fromIndex; i >= 0; i--) {
      if (isEqual(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
