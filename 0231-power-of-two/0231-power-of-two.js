/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // n = 2^x  --> log n = x log 2 --> x = log n / log 2
  if (n === 1) return true;
  return Number.isInteger(Math.log10(n) / Math.log10(2));
};