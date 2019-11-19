'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = 0) {
    if (this.length === 0 || isUndefined(searchElement)) {
      return -1;
    }

    for (let i = this.length + fromIndex; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

/**
 * This function checks if value is undefined.
 *
 * @param {any} value
 * @returns {boolean}
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = applyCustomLastIndexOf;
