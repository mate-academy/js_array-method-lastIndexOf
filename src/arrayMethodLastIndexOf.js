'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (arguments.length === 0) {
      return -1;
    }

    let beginingIndex;

    if (fromIndex === undefined || fromIndex >= this.length) {
      beginingIndex = this.length - 1;
    } else if (fromIndex < 0) {
      if (this.length + fromIndex < 0) {
        return -1;
      } else {
        beginingIndex = this.length + fromIndex;
      }
    }

    for (; beginingIndex >= 0; --beginingIndex) {
      if (searchElement === this[beginingIndex]
          || (isNaN(searchElement)
              && isNaN(this[beginingIndex])
              && this[beginingIndex] !== undefined
          )
      ) {
        return beginingIndex;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
