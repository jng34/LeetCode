/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let indexObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (i - indexObj[nums[i]] <= k) return true;
        indexObj[nums[i]] = i;
    }
    
    return false;
};