/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // sliding window technique
    // sum = 9, target = 7
    // [2,3,1,2,4,3]
    //        l 
    //          r
    let length = 0, sum = 0, left = 0, right = 0;
    while (right < nums.length) {
        sum += nums[right];
        if (sum >= target) {
            length = right - left + 1;
            break;
        }
        right++;
    }
    
    while (right < nums.length) {
        sum -= nums[left];
        left++;
        if (sum >= target) {
            length = Math.min(length, right - left + 1);   
        } else {
            if (nums[++right]) {
                sum += nums[right];
            }
        }
    }
    return length;
};