'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    if (searchElement === undefined) {
      return -1;
    }
    
    let startEnd = fromIndex;
    
    if (!startEnd) {
      startEnd = this.length;
    } else if (startEnd < 0) {
      startEnd = this.length - Math.abs(startEnd);
    }
    
    for (let i = startEnd; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    
    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
