'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement, fromIndex = this.length - 1
  ) {
    let reassignIndex = fromIndex;

    if (reassignIndex < 0) {
      reassignIndex = this.length - Math.abs(reassignIndex);
    } else if (reassignIndex > this.length) {
      reassignIndex = this.length - 1;
    }

    for (let i = reassignIndex; i >= 0; i--) {
      if (Object.is(this[i], searchElement)) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
