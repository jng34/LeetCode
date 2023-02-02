/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) { 
    let total = nums.reduce((a,b) => a+b, 0);
    
    /*
        [ 1, 7, 3, 6, 5, 6 ]
          i
        leftSum = 0
        rightSum = 28
    */
    
    let leftSum = 0, rightSum = total;
    let i = 0;
    
    while (i < nums.length) {
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i]
        i++;
        
    }
    
    return -1;
};