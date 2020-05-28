'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    if (this.length === 0) {
      return -1;
    }

    let startIndex = fromIndex - 1;

    if (startIndex < 0) {
      startIndex += this.length + 1;
    }

    for (let i = startIndex; i >= 0; i--) {
      if (Object.is(searchElement, this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;

// const source = ['11', '22', '33', '', 44, '11', 55];

// applyCustomLastIndexOf();

// console.log(source.lastIndexOf2(''));
