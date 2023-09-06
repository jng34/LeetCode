/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    if (n < 3) return 0;
    let count = 0;
    for (let i = 1; i < n; i++) {
        const diff = nums[i] - nums[i-1];
        count += dp(i+1, nums[i], diff);
    }
    return count;
    
    
    // Helper function
    function dp(index, prev, diff) {
        if (index === n || nums[index] - prev !== diff) return 0;
        return 1 + dp(index+1, nums[index], diff);
    }
};