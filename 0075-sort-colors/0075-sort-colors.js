/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // [2, 0, 2, 1, 0, 1]
    //            j  i
    //              idx
    let index = 0;
    
    while (index < nums.length) {
        let i = nums.length-1;
        let j = nums.length-2;
        while (j >= index) {
            if (nums[i] < nums[j]) {
                [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
            }
            i--;
            j--;
        }
        index++;
        // i = index;
        // j = i-1;
    }
};