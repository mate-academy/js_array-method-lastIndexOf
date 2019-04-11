'use strict';

/**
 * Implement method lastIndexOf
 *
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(token, index = 0) {
    if (token === undefined) return -1;
    for (let i = index + this.length; i >= 0; i--) {
      if (this[i] === token) return i;
    }
    return -1;
  };
}
module.exports = applyCustomLastIndexOf;
