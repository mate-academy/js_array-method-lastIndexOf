'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let position = fromIndex;

    if (position > this.length || position === undefined) {
      position = this.length - 1;
    } else if (-position >= this.length) {
      return -1;
    } else if (position < 0) {
      position = (this.length) + position;
    }

    for (let i = position; i >= 0; i--) {
      if ((this[i] === searchElement)) {
        return (i === undefined) ? -1 : i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
