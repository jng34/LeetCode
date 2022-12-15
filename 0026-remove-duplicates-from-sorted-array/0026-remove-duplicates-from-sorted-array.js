/**
 * @param {number[]} nums
 * @return {number}
 */

//  1  1  2  2  2 
//              i
//        p
var removeDuplicates = function(nums) {
  let pointer = 1, i = 1;
  while (i < nums.length) {
    if (nums[i - 1] !== nums[i]) {
      nums[pointer] = nums[i];
      pointer++;
    }
    i++;
  }
  return pointer;
};