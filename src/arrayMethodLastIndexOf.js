'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (this.length === 0 || searchElement === undefined) {
      return -1;
    }
    let i = fromIndex;
    if (i < 0) {
      i = this.length + i;
    }
    if (((i + this.length) < 0)
       || (i > this.length) > 0) {
      i = this.length;
    }
    for (; i >= 0; --i) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
    // return this['lastIndexOf'](...arguments);
  };
}

module.exports = applyCustomLastIndexOf;
