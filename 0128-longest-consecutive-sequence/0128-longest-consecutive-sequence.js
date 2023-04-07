/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a,b) => a-b);
    let longest = 1;
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                count++;
            } else {
                longest = Math.max(longest, count);
                count = 1;
            }   
        }
    }
    
    return Math.max(longest, count);
};