/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  const n = nums.length;  
  
  let rightMax = [];
  rightMax[n-1] = nums[n-1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i+1], nums[i]);
  }
  console.log(nums)
  console.log(rightMax)
  
  let width = 0;
  let l = 0, r = 0;
  while (r < n) {
    console.log('iteration')
    while (l < r && nums[l] > rightMax[r]) {
      l++;
    }
    width = Math.max(width, r-l);
    console.log(width)
    r++;
  }
  
  return width;
};