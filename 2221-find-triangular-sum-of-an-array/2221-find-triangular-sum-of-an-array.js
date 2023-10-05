/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums, tempArr=[]) {
    // use recursion with base case n = 1
    const n = nums.length;
    if (n === 1) return nums[0];
    
    for (let i=0; i<n-1; i++) {
        tempArr[i] = (nums[i] + nums[i+1]) % 10; 
    }
    
    return triangularSum(tempArr, []);
};