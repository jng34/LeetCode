/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    let maxBeauty = 0;
    
    let l = 0, r = 0, n = nums.length;
    
    // Sort nums
    nums.sort((a,b) => a - b);
    
    while (l < n) {
        while (r < n) {
            // Check if left and right nums are within range of each other
            if (nums[r] - nums[l] > 2*k) break;
            r++;
        }
        // Update maxBeauty 
        maxBeauty = Math.max(maxBeauty, r - l);
        l++;
    }
    
    return maxBeauty;
};