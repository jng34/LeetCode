/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;
    
    // [2,1,3,5,0,4,6]
    //        i
    //    
    // min = 2, mid = 1, max = 3
    //
    
    let min = Infinity;
    let mid = Infinity;
    
    for (let i=0; i<nums.length; i++) {
        
        if (nums[i] <= min) {
            min = nums[i];
        } else if (nums[i] <= mid) {
            mid = nums[i];
        } else {
            return true;
        }

    }
    
    return false
};