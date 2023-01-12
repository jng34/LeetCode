/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let result = new Array(nums.length).fill(0);
  let left = 0, right = nums.length-1, write = nums.length-1;
  let leftSq = nums[left]**2, rightSq = nums[right]**2;

  while (write >= 0) {
    if (leftSq <= rightSq) {
      result[write] = rightSq;
      right--;
      rightSq = nums[right]**2;
    } else {
      result[write] = leftSq;
      left++;
      leftSq = nums[left]**2;
    }
    write--;
  }
  
  return result;
};