'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = +Infinity) {
    const length = this.length;
    let index = fromIndex;

    if (arguments.length === 0 || searchElement === undefined) {
      return -1;
    }

    if (index < 0) {
      if ((index * -1) > length) {
        index = 0;
      } else {
        index += length;
      }
    } else if (index > length) {
      index = length;
    }

    for (let i = index; i >= 0; i--) {
      if (
        (Number.isNaN(searchElement) && Number.isNaN(this[i]))
        || this[i] === searchElement
      ) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
