'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index;
    const mainArr = this;
    const emptyArg = [...arguments];

    if (emptyArg.length === 0) {
      return -1;
    }

    if (fromIndex === Math.abs(fromIndex)) {
      index = fromIndex || mainArr.length;
    } else {
      index = Math.abs(fromIndex) < mainArr.length ? mainArr.length
        - Math.abs(fromIndex) : mainArr.length;
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
