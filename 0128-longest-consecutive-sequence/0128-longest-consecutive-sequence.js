/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 1) return 1;
    nums.sort((a,b) => a-b);
    
    
    // 0 1 1 2
    //     i
    // ct = 2
    let longest = 0;
    let count = 1;
    let currNum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === currNum + 1) {
            count++;
        } else if (nums[i] === currNum) {
            longest = Math.max(longest, count);
            continue;           
        } else {
            count = 1;
        }
        currNum = nums[i];
        longest = Math.max(longest, count);
    }
    
    return longest;
};