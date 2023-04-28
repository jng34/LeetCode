/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elemSum = nums.reduce((a,b) => a+b)
    let digitSum = 0;
    let digits = '';
    
    for (let n of nums) {
        digits += String(n)
    }
    
    for (let n of digits) {
        digitSum += Number(n)
    }
    
    return Math.abs(elemSum - digitSum);
};