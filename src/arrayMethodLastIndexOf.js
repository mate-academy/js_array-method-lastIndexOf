'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    const arr = this;
    let ind = arr.length;

    if (fromIndex < 0) {
      ind = arr.length + fromIndex;
    }

    if (searchElement === undefined || searchElement === null) {
      return -1;
    }

    for (let i = ind; i >= 0; i--) {
      if (Object.is(arr[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
