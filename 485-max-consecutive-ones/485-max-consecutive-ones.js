/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (nums.length === 0) return 0;
    
    let max = 0;
    let count = 1;
    
    for (let i=0; i<nums.length; i++) {
        
        if (nums[i] === 1) {
            if (nums[i+1] === 1) {
                count++;
            } else {
                max = Math.max(max, count);
                count = 1;
            }
        }
        
    }
    
    return max;
};