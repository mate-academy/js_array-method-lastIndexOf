'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length - 1) {
    let startingIndex = fromIndex;

    if (fromIndex < 0) {
      startingIndex += this.length; // - (-startingIndex)
    } else if (fromIndex > this.length) {
      startingIndex = this.length - 1;
    };

    for (let i = startingIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      };
    };

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
