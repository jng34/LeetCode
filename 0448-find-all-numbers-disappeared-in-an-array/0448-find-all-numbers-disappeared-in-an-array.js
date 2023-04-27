/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let missing = [];
    
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        const index = num-1;
        nums[index] = Math.abs(nums[index]) * -1;
    }
    
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) missing.push(j+1);
    }
    
    return missing;
};