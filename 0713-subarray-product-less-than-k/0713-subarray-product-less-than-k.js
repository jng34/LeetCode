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
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {  
    if (nums[i] < k) {
      count++;
    } else {
      continue;
    }
    count += _numSubarrayProductLessThanK(nums, k, i)  
  }
  return count;
};


function _numSubarrayProductLessThanK(nums, k, j) {
  let counter = 0;
  let prod = nums[j];
  while (j < nums.length && prod * nums[j+1] < k) {
      counter++;
      prod = prod * nums[j+1];
      j++;
    }
  return counter;
}