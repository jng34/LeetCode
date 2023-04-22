/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let res = [];
  let seq = [];
    
  function backTrack(index) {
    if (seq.length >= 2) {
      res.push(seq.slice())
    }
    
    const seen = new Set();
    
    for (let i=index; i<nums.length; i++) {
      if (seq.length > 0 && nums[i] < seq[seq.length-1] || seen.has(nums[i])) continue;
      seen.add(nums[i]);
      seq.push(nums[i]);
      backTrack(i+1);
      seq.pop();
    }    
    return;
  }
  
  backTrack(0)
  return res;
}