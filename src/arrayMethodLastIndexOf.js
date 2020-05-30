'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index;
    let position = fromIndex;

    if (position > this.length || position === undefined) {
      position = this.length - 1;
    } else if (-position >= this.length) {
      return -1;
    } else if (position < 0) {
      position = (this.length) + position;
    }

    if (searchElement !== undefined && isNaN(searchElement)) {
      for (let i = position; i >= 0; i--) {
        if (this[i] !== undefined && isNaN(this[i])) {
          index = i;
          break;
        }
      }

      return (index === undefined) ? -1 : index;
    }

    for (let i = position; i >= 0; i--) {
      if ((this[i] === searchElement)) {
        index = i;
        break;
      }
    }

    return (index === undefined) ? -1 : index;
  };
}

module.exports = applyCustomLastIndexOf;
