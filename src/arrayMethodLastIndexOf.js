'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let searchFrom = fromIndex;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex >= this.length) {
      searchFrom = this.length;
    }

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
      // console.log(searchFrom, '**************************+fromIndex');
    }

    if (searchFrom < 0) {
      return -1;
    }

    for (let i = searchFrom; i >= 0; i--) {
      // console.log(this[i], 'iiiiiiiiiiiiiii');
      // console.log(searchFrom, 'searchFrom*******');
      if (this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        // console.log('888888888');
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
