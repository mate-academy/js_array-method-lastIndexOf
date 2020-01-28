'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (!arguments.length) {
      return -1;
    }

    let beginingIndex;

    if (fromIndex >= this.length) {
      beginingIndex = this.length - 1;
    } else if (fromIndex < 0) {
      if (this.length + fromIndex < 0) {
        return -1;
      } else {
        beginingIndex = this.length + fromIndex;
      }
    }

    while (beginingIndex >= 0) {
      if (searchElement === this[beginingIndex]
          || (isNaN(searchElement)
              && isNaN(this[beginingIndex])
              && this[beginingIndex] !== undefined
          )
      ) {
        return beginingIndex;
      }

      beginingIndex -= 1;
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
