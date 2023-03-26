/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = new Array(nums1.length).fill(-1);
    
    // Save all nums in nums2 in a hashmap with their right neighbors
    // key -> num, val -> neighbor
    // -1 if no neighbor
    
    const neighbors = {};
    
    for (let i = 0; i < nums2.length - 1; i++) {
        for (let k = i + 1; k < nums2.length; k++) {
            if (nums2[k] > nums2[i]) { 
                neighbors[nums2[i]] = nums2[k];
                break;
            }
        }
    }
    
    for (let j = 0; j < nums1.length; j++) {
        const num = nums1[j];
        if (!neighbors[num]) continue;
        if (neighbors[num] > num) ans[j] = neighbors[num];
    }
    
    return ans;
};





