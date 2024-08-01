/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  const n = nums.length;
  
  // find index where curr n is less than prev n 
  let x = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      x = i;
      break;
    }  
  }
  
  // sorted array
  const sorted = [...nums].sort((a,b) => a-b);
  for (let i=0; i<n; i++) {
    if (sorted[i] !== nums[(i + x) % n]) return false;
  }
  
  return true;
};