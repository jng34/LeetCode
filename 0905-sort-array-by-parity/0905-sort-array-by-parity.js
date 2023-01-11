/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  // Base case 
  if (nums.length === 1) return nums;
  
  /* 
    4 cases to consider
    - If left is odd and right is even
        assign and swap values
    - If left is even and right is odd
        increment left and decrement right
    - If left and right are odd
        decrement right only
    - If left and right are even
        increment left only
  */
  let left = 0, right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
      let currLeft = nums[left];
      nums[left] = nums[right];
      nums[right] = currLeft;
    } else if (nums[left] % 2 === 0 && nums[right] % 2 !== 0) {
      left++;
      right--;
    } else if (nums[left] % 2 !== 0 && nums[right] % 2 !== 0) {
      right--;
    } else {
      left++;
    }
  }
  
  return nums;
};