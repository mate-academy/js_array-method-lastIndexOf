'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index = fromIndex;
    const thisLength = this.length;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex === undefined
      || fromIndex === null
      || Number.isNaN(fromIndex)) {
      index = thisLength;
    };

    if (fromIndex < 0) {
      index = thisLength + fromIndex;
    };

    if (fromIndex < 0 && -fromIndex > thisLength) {
      index = thisLength;
    };

    for (let i = index; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      };

      if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      };
    };

    return -1;
  };
};

module.exports = applyCustomLastIndexOf;
