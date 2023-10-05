/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [];
    let temp = -Infinity;
    for (let i=nums.length-1; i>=0; i--) {
        if (nums[i] < temp) return true;
        while (stack[stack.length-1] < nums[i]) {
            temp = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};