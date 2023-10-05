/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    return helper(nums, nums.length);
    
    // use recursion with base case n = 1
    function helper(arr, n) {
        if (n === 1) return nums[0];
        for (let i=0; i<n-1; i++) {
            arr[i] = (nums[i] + nums[i+1]) % 10; 
        }
        return helper(arr, n-1);  
    }
    
};