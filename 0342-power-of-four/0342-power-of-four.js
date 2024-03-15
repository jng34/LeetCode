/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  // recursion
  // 1,4,16,64,256...
  if (n === 1) return true;
  if (n < 1) return false;
  return isPowerOfFour(n/4);
};