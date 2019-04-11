'use strict';

/**
 * Implement method lastIndexOf
 *
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(token, index = 0) {
    let lastIndex;
    if (index < 0) {
      for (let i = index + this.length; i >= 0; i--) {
        if (this[i] === token) {
          lastIndex = i;
          return lastIndex;
        }
      }
      if (lastIndex === undefined) return -1;
    }
    for (let i = index; i < this.length; i++) {
      if (this[i] === token) lastIndex = i;
    }
    if (lastIndex === undefined) return -1;
    return lastIndex;
  };
}

module.exports = applyCustomLastIndexOf;
