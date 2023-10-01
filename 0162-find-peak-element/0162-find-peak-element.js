/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // binary search for log(n) run time
    // [1,2,1,3,5,6,4]
    //  l           r
    //        m
    
    let l=0, r=nums.length-1;
    while (l <= r) {
        const mid = Math.floor((l+r)/2);
        let left = nums[mid-1];
        if (mid-1 === -1) left = -Infinity;
        let right = nums[mid+1];
        if (mid+1 === nums.length) right = -Infinity;
        
        if (nums[mid] > left && nums[mid] > right) {
            return mid;
        } else if (nums[mid] < left) {
            r=mid-1;
        } else if (nums[mid] < right) {
            l=mid+1;
        }
    }
};