/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let l = 0;  l < nums.length - 1; l++) {
        for (let r = l + 1; r < nums.length; r++) {
            if (nums[r] < nums[l]) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
            }
        }
    }
};