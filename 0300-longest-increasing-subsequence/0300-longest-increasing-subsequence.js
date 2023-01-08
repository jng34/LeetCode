/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let subseq = [ nums[0] ];
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prev = subseq[i - 1];
    if (curr > prev) {
      subseq.push(curr);
    } else {
      let j = 0;
      while (curr > subseq[j]) {
        j++;
      }
      subseq[j] = curr;
    }
  }
  return subseq.length;
};