/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  // Create var pairSum and set to -Infinity
  let pairSum = -Infinity;
  const n = nums.length;

  // Sort nums in ascending order 
  nums.sort((a,b) => a-b);

  // Iterate from 0 to n/2-1 since nums is even length
  for (let i=0; i<n/2; i++) {
    // Sum up num[i] and num[j]
    const sum = nums[i] + nums[n-1-i];

    // update maxPairSum if sum > pairSum
    if (sum > pairSum) pairSum = sum;
  }

  return pairSum;
};

console.log(minPairSum([3,5,2,6,9,4]))