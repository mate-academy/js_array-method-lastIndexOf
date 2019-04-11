'use strict';

/**
 * Implement method lastIndexOf
 *
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(token, index = 0) {
    let lastIndex;
    if (index < 0) {
      index = index + this.length;
      for (index; index >= 0; index--) {
        if (this[index] === token) {
          lastIndex = index;
          return lastIndex;
        }
      }
      if (lastIndex === undefined) return -1;
    }
    for (index; index < this.length; index++) {
      if (this[index] === token) lastIndex = index;
    }
    if (lastIndex === undefined) return -1;
    return lastIndex;
  };
}

module.exports = applyCustomLastIndexOf;
