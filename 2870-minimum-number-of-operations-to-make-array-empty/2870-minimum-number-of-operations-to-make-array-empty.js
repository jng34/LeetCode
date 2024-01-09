/**
 * @param {number[]} nums
 * @return {number}
 */
// Count freq of each n in nums.
// remove 2 or 3 at a time
// for each n, reduce freq by 2 until freq is divisible by 3.
// track number of operations.
// for odd numbers,
// 7 = 3 + 2 + 2
// 10 = 3 + 3 + 2 + 2
// 
// 13 = 3 + 3 + 3 + 2 + 2
// 29 = 2 + (3 * 7)
// 53 = 2 + 2
// while freq is not divisible by 3:
//    subtract freq by 2 and increment opers by 1
// increment opers by freq/3 

var minOperations = function(nums) {
  let opers = 0;
  const freq = {};
  nums.forEach(n => freq[n] = (freq[n] || 0) + 1);
  
  for (let n in freq) {
    if (freq[n] === 1) return -1;
    
    // Case 1: freq[n] is divisible by 3.
    if (freq[n] % 3 === 0) {
      opers += freq[n]/3;  
    } else { 
      // Case 2: freq[n] is even or odd.
      while (freq[n] % 3 !== 0) {
        freq[n] -= 2;
        opers++;
      }
      opers += freq[n]/3;
    }
  }
  return opers;
};