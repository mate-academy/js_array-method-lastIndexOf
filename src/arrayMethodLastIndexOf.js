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

    switch (fromIndex) {
      case 0:
        validFromIndex = this.length - 1;
        break;
      case fromIndex > 0:
        validFromIndex = fromIndex;
        break;
      case fromIndex < 0:
        validFromIndex = this.length - 1 + fromIndex;
        break;
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
