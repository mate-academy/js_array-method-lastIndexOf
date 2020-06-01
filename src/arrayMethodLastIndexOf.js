'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = +Infinity) {
    const length = this.length;
    let index = fromIndex >= 0 ? fromIndex : fromIndex + length;

    index = index < 0 ? 0 : index;
    index = index > length ? length : index;

    if (arguments.length === 0 || searchElement === undefined) {
      return -1;
    }

    for (let i = index; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
