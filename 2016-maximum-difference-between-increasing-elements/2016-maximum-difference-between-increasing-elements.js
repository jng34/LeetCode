/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    /*
        initialize variables minVal and maxDiff
        for each elem in nums:
            if curr elem is greater than prev val:
                maxDiff = max(maxDiff, diff)
                minVal = min(minVal, prev)
        return maxDiff
    */

    let minVal = nums[0];
    let maxDiff = -Infinity;
    
    for (let i=1; i<nums.length; i++) {
        const curr = nums[i];
        if (curr > minVal) {
            maxDiff = Math.max(maxDiff, curr-minVal);
        }
        minVal = Math.min(minVal, nums[i]);
    }
    
    return maxDiff > 0 ? maxDiff : -1;
};