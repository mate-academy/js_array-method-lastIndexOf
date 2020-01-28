'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let index;
    const mainArr = this;

    if (![...arguments].length) {
      return -1;
    }

    if (fromIndex === Math.abs(fromIndex)) {
      index = fromIndex;
    } else {
      index = Math.abs(fromIndex) < mainArr.length
        ? mainArr.length - Math.abs(fromIndex)
        : mainArr.length;
    }

    for (let i = index; i >= 0; i--) {
      if (Object.is(mainArr[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
