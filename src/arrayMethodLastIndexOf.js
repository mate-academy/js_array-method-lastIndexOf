'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let fromIndexNew = fromIndex || this.length - 1;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndexNew < 0) {
      fromIndexNew = this.length + fromIndexNew;
    }

    if (fromIndexNew < 0) {
      fromIndexNew = this.length - 1;
    }

    for (let i = fromIndexNew; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
