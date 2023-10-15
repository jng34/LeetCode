/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    let low = Math.min(...nums);
    let high = Math.max(...nums);
    while(low < high) {
        const mid = Math.floor((low + high)/2);
        if (isKHouses(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
    
    
    // Helper fn to check for k houses requirement 
    function isKHouses(max) {
        let houses = 0;
        for(let i=0; i<nums.length; i++) {
            if (nums[i] <= max) {
                houses++;
                i++;
            }
            if (houses === k) return true;
        }
        return false;
    }
};