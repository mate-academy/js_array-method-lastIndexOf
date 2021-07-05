'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1) {
    if (searchElement === undefined) {
      return -1;
    }

    let newIndex = fromIndex;
    if (newIndex >= this.length) {
      newIndex = this.length - 1;
    };

    if (newIndex < 0) {
      newIndex = this.length + newIndex;
      if (newIndex < 0) {
        return -1;
      };
    };

    for (let i = newIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
      if (isNaN(this[i]) && isNaN(searchElement)) {
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
