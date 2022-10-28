/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    let sortNums = nums.sort((a,b) => a-b);
    let len = nums.length;
    
    return Math.max(
        sortNums[len-1]*sortNums[len-2]*sortNums[len-3], 
        sortNums[0]*sortNums[1]*sortNums[len-1]
    );
};