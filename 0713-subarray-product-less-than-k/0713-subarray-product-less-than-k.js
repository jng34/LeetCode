/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
  If product of subarray elems is less than k, increment count by 1
  Recursively, check if first elem of subarray is less than k
  If so, increment count and multiply by next first element of subarray
  Iterate through entire nums array
  Return count 
*/
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0;
  let count = 0, left = 0, right = 0, product = 1;
  while (right < nums.length) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    count += right - left + 1;
    right++;
  }
  return count;
};


