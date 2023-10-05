/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    // initialize min sum of first k nums
    nums.sort((a,b) => b-a);
    let minDiff = Infinity;
    let i = 0;
    
    /*
        [9,7,7,5,4,1]
        i j
        i = 0
        min = 2
    */
    
    for (let j=k-1; j<nums.length; j++) {
        let diff = nums[i]-nums[j];
        minDiff = Math.min(minDiff, diff);
        i++;
    }
    return minDiff;
};