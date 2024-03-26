/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const seen = new Set();
  let ans = [];
  
  for (let n of nums) {
    if (seen.has(n)) ans.push(n);
    seen.add(n);
  }
  
  return ans;
};