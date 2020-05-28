'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement,
    fromIndex = this.length - 1) {
    if (searchElement === undefined) {
      return -1;
    }

    let newFromIndex = fromIndex;

    if (newFromIndex >= this.length) {
      return -1;
    } else if (Math.abs(newFromIndex) > this.length) {
      newFromIndex = 0;
    } else if (fromIndex < 0) {
      newFromIndex = (this.length + fromIndex);
    }

    for (let i = newFromIndex; i >= 0; i--) {
      if ((!Number.isNaN(searchElement) && this[i] === searchElement)
      || Number.isNaN(this[i])) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
