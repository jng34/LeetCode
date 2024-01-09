/**
 * @param {number[]} nums
 * @return {number}
 */

// Naive recursion solution
var lengthOfLIS = function(nums) {
  const n = nums.length;
  const dp = new Array(n+1).fill().map(() => Array(n+1).fill(-1));
  return helper(0, -1, dp);
  
  // Helper function
  function helper(currIdx, prevIdx, dp) {
    if (currIdx === n) return 0;
    
    if (dp[currIdx][prevIdx+1] !== -1) return dp[currIdx][prevIdx+1];
    
    let takeOpt = 0;
    if (prevIdx === -1 || nums[currIdx] > nums[prevIdx]) {
      takeOpt = 1 + helper(currIdx+1, currIdx, dp);
    }
  
    const skipOpt = helper(currIdx+1, prevIdx, dp);      
    
    return dp[currIdx][prevIdx+1] = Math.max(skipOpt, takeOpt);
  }
};