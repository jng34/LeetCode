/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    // iterate to check for monotone increasing
    let increasing = true;
    for (let i=1; i<nums.length; i++) {
        if (nums[i-1] <= nums[i]) {
            continue;
        } else {
            increasing = false;
            break;
        }
    }
    
    if (increasing) return true;
    
    //iterate to check for monotone decreasing
    let decreasing = true;
    for (let j=1; j<nums.length; j++) {
        if (nums[j-1] >= nums[j]) {
            continue;
        } else {
            decreasing = false;
            break;
        }
    }
    
    return increasing || decreasing;
};