/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  for (let i = 1; i < n; i++) {
    let a = i, b = n - i;
    if (String(a).includes('0') || String(b).includes('0')) {
      continue;
    }
    return [a,b];
  }
};