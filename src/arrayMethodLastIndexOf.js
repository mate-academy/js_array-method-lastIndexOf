'use strict';

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    const startIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (let i = startIndex < 0 ? this.length - 1 : startIndex; i >= 0; i--) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
