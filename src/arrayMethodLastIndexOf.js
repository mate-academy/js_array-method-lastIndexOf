'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let startFind = fromIndex;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0) {
      startFind = this.length + fromIndex;
    }

    if (startFind < 0) {
      startFind = this.length;
    }

    for (let i = startFind; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }

      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
