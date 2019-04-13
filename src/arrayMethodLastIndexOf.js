'use strict';

/**
 * Implement method lastIndexOf
 *
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(item, position) {
    let pos;
    if (position >= this.length || !position) {
      pos = this.length - 1;
    }
    if (position < 0) {
      pos = this.length + position;
    }
    if (pos < 0) {
      return -1;
    }
    for (var i = pos; i >= 0; i--) {
      if (item === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
