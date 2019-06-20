'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(
    searchElement,
    fromIndex = this.length - 1
  ) {
    let i;
    if (fromIndex < 0) {
    // Если индекс отрицательный,
    // он трактуется как смещение с конца массива.
    // К длинне массива прибавляем отрицательное число,
    // чем уменьшаем начальное значение, от которого
    // начнем в обратном порядке сверять элементы.
    // Или  отнимаем абсолютное значение |fromIndex|
    //
    // i = this.length + fromIndex;
    //
      i = this.length - Math.abs(fromIndex);
    } else {
      i = fromIndex;
    }

    for (i; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}

applyCustomLastIndexOf();
console.log([1, 2, 3, 1, 2, 3].lastIndexOf(2, 1));
console.log([1, 2, 3, 1, 2, 3].lastIndexOf2(2, 1));

module.exports = applyCustomLastIndexOf;
