'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (this.length === 0) {
      return -1;
    }

    if (arguments.length < 1) {
      return -1;
    }

    let findValue = searchElement;
    let indexFrom = fromIndex || this.length - 1;

    if (searchElement === null) {
      findValue = null;
    }

    if (searchElement === undefined) {
      findValue = undefined;
    }

    if (Math.sign(indexFrom) < 0) {
      indexFrom = this.length - Math.abs(indexFrom);

      if (Math.sign(indexFrom) < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i >= 0; i--) {
      if (Number.isNaN(this[i]) && Number.isNaN(findValue)) {
        return i;
      }

      if (this[i] === findValue) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
