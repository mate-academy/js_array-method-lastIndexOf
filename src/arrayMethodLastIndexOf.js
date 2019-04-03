'use strict';

/**
 * Implement method join
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function() {
    // write code here
  };
}

module.exports = applyCustomLastIndexOf;
