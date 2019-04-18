'use strict';

/**
 * Implement method lastIndexOf
 *
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(value, inputIndex = this.length) {
    if (value === undefined || this.length === 0) return -1;
    let fromIndex = inputIndex;
    if (fromIndex < 0) fromIndex = this.length + fromIndex;
    for (fromIndex; fromIndex >= 0; fromIndex--) {
      if (this[fromIndex] === value || (isNaN(value) && isNaN(this[fromIndex]))) {
        return fromIndex;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
