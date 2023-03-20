/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  let answer = [0, 0];
  let freq = {};
  
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }
  
  for (let n in freq) {
    if (freq[n] >= 2) {
      answer[0] += Math.floor(freq[n] / 2);   // Quotient is the number of pairs
      answer[1] += freq[n] % 2;   // Remainder is the leftover integers
    } else {
      answer[1] += 1;
    }
  }
  
  return answer;
};