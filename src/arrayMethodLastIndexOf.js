'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElem, fromInd = this.length - 1) {
    const indexSearch = arguments.length < 2
      ? 0
      : fromInd;

    let i = fromInd < 0
      ? fromInd + this.length
      : fromInd;

    for (i; i > indexSearch; i--) {
      if (this[i] === searchElem) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
