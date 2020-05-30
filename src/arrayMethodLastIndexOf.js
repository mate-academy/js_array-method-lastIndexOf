'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let desiredIndex = fromIndex;

    if (arguments.length === 0) {
      return -1;
    }

    if (fromIndex === undefined
      || fromIndex === null
      || Number.isNaN(fromIndex)) {
      desiredIndex = this.length;
    };

    if (fromIndex < 0) {
      desiredIndex = this.length + fromIndex;
    };

    if (fromIndex < 0 && -fromIndex > this.length) {
      desiredIndex = this.length;
    };

    for (let i = desiredIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      };

      if (Number.isNaN(searchElement) && Number.isNaN(this[i])) {
        return i;
      };
    };

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
