/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const allNums = {};
  for (let num of nums) {
    allNums[num] = true;
  }
  
  for (let n = 0; n <= nums.length; n++) {
    if (!allNums[n]) return n;
  }
};