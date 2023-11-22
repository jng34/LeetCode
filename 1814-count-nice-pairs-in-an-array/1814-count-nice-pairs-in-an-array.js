/**
 * @param {number[]} nums
 * @return {number}
 */


var countNicePairs = function(nums) {
  // Create pairs variable.
  let pairs = 0;
  
  // Use a hashmap to track number of occurences
  const freq = {};
  
  // num[i] - rev(num[i]) = num[j] - rev(num[j])
  // For each num
  for (let i=0; i<nums.length; i++) {
    // If num is seen, increment pairs by freq[diff] to make all pairs with curr.
    const diff = nums[i] - rev(nums[i]);
    if (freq[diff]) {
      pairs = (pairs + freq[diff]) % (10**9+7);
    }
    freq[diff] = (freq[diff] || 0) + 1;
  }

  return pairs; 
};


// Create a helper rev(x) fn.
function rev(n) {
  // '123' -> '321'
  let ans = '';
  let numStr = String(n);
  for (let i=numStr.length-1; i>=0; i--) {
    ans += numStr[i];
  }
  return Number(ans);
}