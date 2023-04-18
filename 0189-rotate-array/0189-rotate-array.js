/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    
    const n = k % len;
    //        i = 7
    // i + k = 11 
                        
    // [1,2,3,4,5,6,7]
    // [7,6,5,4,3,2,1]
    
    // 0, nums.length-1
    // 0, k-1
    // k, nums.length-1
    
    // [7,1,2,3,4,5,6]
    // k = 8, n = 1
    
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