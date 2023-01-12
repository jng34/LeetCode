/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length-1;
  let mid = Math.floor((right - left)/2);
  
  while (left <= right) {
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
      right--;
    } else {
      right = mid - 1; 
      left++;
    }
  }
  
  return -1;
};
