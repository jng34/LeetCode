/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // [0, 2, 0, 2, 1, 1]
    //  i
    //  j

    for (let i=0; i<nums.length; i++) {
        for (let j=nums.length-1; j>=1; j--) {
            if (nums[j] < nums[j-1]) {
                [ nums[j], nums[j-1] ] = [ nums[j-1], nums[j] ]
            }
        }
    }
};