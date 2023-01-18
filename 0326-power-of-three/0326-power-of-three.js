/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 1) return false;
  return Number.isInteger(Math.log10(n) / Math.log10(3))
};