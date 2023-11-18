/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    /*
      Max possible freq is length of nums.
      Sort nums in ascending order.
      Brute force: 
        Increment all elems and update max freq, starting from smallest elem.
        Never increment largest value.
        
    */

  nums.sort((a,b) => a-b);
  let l = 0;
  let maxFreq = 1;
  let currSum = 0;
  
  for (let r=0; r<nums.length; r++) {
    const target = nums[r];
    currSum += target;
    while ((r-l+1)*target - currSum > k) {
      currSum -= nums[l];
      l++;
    }
    if (r-l+1 > maxFreq) maxFreq = r-l+1;
  }
  
  return maxFreq;
};