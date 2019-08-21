'use strict';

/**
 * Implement method lastIndexOf
 */
const indexNormalisation = (index, length) => {
  const ind = Math.abs(index) > length - 1
    ? Math.sign(index) * length
    : index;

  return ind < 0 ? length + ind : ind;
};

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let i = fromIndex === undefined
      ? this.length - 1
      : indexNormalisation(fromIndex, this.length);

    while (i >= 0) {
      if (this[i] === searchElement) {
        return i;
      }
      i--;
    }

    return -1;
  };
}

module.exports = applyCustomLastIndexOf;
