/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  let freq = {};
  
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }
  
  return nums.sort((a,b) => freq[a]-freq[b] || b-a);
};