/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;    
    const n = k % len;

    function reverse(i, j) {
        while (i < j) {
            const temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp 
            i++;
            j--;
        }
    }
    
    reverse(0, len-1)
    reverse(0, n-1)
    reverse(n, len-1)
};