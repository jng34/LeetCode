/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let nums = [];
    for (let char of s) {
        if (!isNaN(char)) nums.push(Number(char));
    }
    nums.sort((a,b) => a-b)
    const max = nums[nums.length-1];
    
    while (nums.length > 0) {
        const num = nums.pop();
        if (num !== max) return num;
    }
    return -1;
};