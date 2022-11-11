/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    let leftProd = 1, rightProd = 1;
    
    // [1, 2, 3, 4]
    
    for (let i = nums.length-1; i >= 0; i--) {
        answer[i] = rightProd;
        rightProd *= nums[i];
    }
    
    for (let j = 0; j < nums.length; j++) {
        answer[j] *= leftProd;
        leftProd *= nums[j];
    }
    
    return answer;
    
};