/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
  const freq = {0: 1};
  let sum = 0, count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let diff = sum - k;
    if (diff in freq) count += freq[diff];
    sum in freq ? freq[sum] += 1 : freq[sum] = 1;
  }
  
  return count;
}

// Brute force
// var subarraySum = function(nums, k) {
//   let count = 0, tempSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     tempSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       tempSum += nums[j];
//       if (tempSum === k) count++;
//     }
//   } 
//   return count;
// };