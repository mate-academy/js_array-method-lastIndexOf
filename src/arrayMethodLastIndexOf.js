'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (searchElement === undefined) {
      return -1;
    };

    if (fromIndex === undefined) {
      for (let i = this.length; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    } else if (fromIndex < 0) {
      for (let i = this.length + fromIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    } else {
      for (let i = fromIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
          return i;
        }
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
