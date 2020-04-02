'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let startFind = fromIndex;

    if (!startFind) {
      startFind = this.length;
    }

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

      if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
