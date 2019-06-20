'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2
  = function(searchElement, fromIndex = (this.length - 1)) {
    // write code here
    let newIndex = fromIndex;

    if (fromIndex < 0) {
      newIndex = (this.length + fromIndex);
    }

    for (let i = newIndex; i > -1; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }

    return -1;
  };
}

/*
1. считать в обратную сторону цикл
  1.1 let i = this.length - fromIndex; //Дополнительно указанная позиция
  1.2 i > -1;
  1.3. i--; //обратная/отрицательная итерация

добавить проверку на положительный fromIndex
  если да, то сместить в другую сторону
*/

module.exports = applyCustomLastIndexOf;
