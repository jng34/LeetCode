/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let ans = [];
    const even = [];
    const odd = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    
    even.sort((a,b) => b-a);
    odd.sort((a,b) => a-b);
    
    while (even.length > 0 || odd.length > 0) {
        if (even.length > 0) ans.push(even.pop());
        if (odd.length > 0) ans.push(odd.pop());
    }
    
    return ans;
};