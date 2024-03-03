/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let ans = [];
    let even = 0;
    let odd = 1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            ans[even] = nums[i];
            even += 2;
        } else {
            ans[odd] = nums[i];
            odd += 2;
        }
    }
    
    return ans;
};