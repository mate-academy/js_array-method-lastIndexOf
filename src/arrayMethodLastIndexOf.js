'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let index = this.length - 1;

    if (typeof fromIndex === 'number') {
      if (fromIndex > 0) {
        index = fromIndex;
      }

      if ((fromIndex < 0) & (fromIndex > (-this.length))) {
        index = fromIndex + this.length;
      }
    }

    for (let i = index; i > -1; i--) {
      if (this[i] === searchElement
        || (this[i] + '' === 'NaN' & '' + searchElement === 'NaN')) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
