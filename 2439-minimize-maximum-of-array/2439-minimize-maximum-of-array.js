/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        answer = Math.max(answer, Math.ceil(sum/(i+1)));
    }
    
    return answer;
};