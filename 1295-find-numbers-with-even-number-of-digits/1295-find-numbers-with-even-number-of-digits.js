/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let ans = 0;
  
  for (let n of nums) {
    if (String(n).length % 2 === 0) ans++;
  }
  
  return ans;
};