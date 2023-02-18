/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    // [2, 3, -1, 8, 4]
    //            i 
    //  leftSum = 4
    //  rightSum = 4

    let leftSum = 0;
    let rightSum = nums.reduce((a,b) => a+b);
    let i = 0;
    
    while (i < nums.length) {
        rightSum -= nums[i]; 
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
        i++;
    }
    
    return -1;
};