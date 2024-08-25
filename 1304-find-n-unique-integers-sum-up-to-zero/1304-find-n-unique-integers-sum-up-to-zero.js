/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let ans = [];
  let i = 1;
  if (n % 2 !== 0) ans.push(0);
  while (ans.length < n) {
    ans.push(i, -1*i);
    i++
  }
  return ans;
};