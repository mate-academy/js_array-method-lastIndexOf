'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let fromIndexNew = fromIndex || this.length - 1;

    if (this.length === 0 || typeof searchElement === 'undefined') {
      return -1;
    }

    if (fromIndexNew < 0) {
      fromIndexNew = this.length + fromIndexNew;
    }

    for (let i = fromIndexNew; i >= 0; i--) {
      if (
        this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))
        || (typeof searchElement === 'undefined'
        && typeof this[i] === 'undefined')
      ) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
