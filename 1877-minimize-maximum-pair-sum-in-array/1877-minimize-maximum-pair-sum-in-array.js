/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  // Create var pairSum and set to -Infinity
  let pairSum = -Infinity;

  // Sort nums in ascending order 
  nums.sort((a,b) => a-b);

  // Two pointers, i = 0 and j = nums.length-1
  let i = 0, j = nums.length-1;

  while (i < j) {
    // Sum up num[i] and num[j]
    const sum = nums[i] + nums[j];

    // update maxPairSum if sum > pairSum
    if (sum > pairSum) pairSum = sum;

    // increment i and decrement j
    i++;
    j--;
  }

  return pairSum;
};