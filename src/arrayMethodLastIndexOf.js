'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    // write code here
    const arr = this;
    const start = fromIndex < 0 ? arr.length + fromIndex : arr.length;

    if (arr.length === 0 || searchElement === undefined) {
      return -1;
    }

    for (let i = start; i >= 0; i--) {
      if (arr[i] === searchElement || (isNaN(arr[i])
       && isNaN(searchElement) && searchElement
       !== undefined && arr[i] !== undefined)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
