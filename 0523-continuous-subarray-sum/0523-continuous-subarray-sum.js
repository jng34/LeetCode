/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  //For each elem of nums
  //Iterate through curr index of elem to end of nums
  //Check if sum length > 1 and if sum is a multiple of k using modulus op
  const freq = {0: -1};
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k != 0) sum %= k;
    if (sum in freq) {
      if (i - freq[sum] > 1) return true;
    } else {
      freq[sum] = i;
    }
  }
  return false;
};