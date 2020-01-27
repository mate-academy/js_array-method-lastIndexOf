'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (arguments.length === 0) {
      return -1;
    }

    let validFromIndex;

    if (fromIndex === 0) {
      validFromIndex = this.length - 1;
    } else if (fromIndex > 0) {
      validFromIndex = fromIndex;
    } else if (fromIndex < 0) {
      validFromIndex = this.length + fromIndex;
    }

    for (let i = validFromIndex; i >= 0; i--) {
      if (this[i] === searchElement
        || (isNaN(this[i]) && isNaN(searchElement) && this[i] !== undefined)) {
        return i;
      }
    }

    return -1;
  };
};

module.exports = applyCustomLastIndexOf;
