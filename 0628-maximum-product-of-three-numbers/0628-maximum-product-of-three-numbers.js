/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    let max;
    
    if (nums.length === 3) {
        for (let n of nums) {
            max *= n;
        }
    }
    
    let sortNums = nums.sort((a,b) => a-b);
    let len = nums.length;
    
    // if (sortNums[len - 1] >= 0 && sortNums[len - 2] >= 0 && sortNums[len - 3] >= 0) {
    //     max = sortNums[len-1]*sortNums[len-2]*sortNums[len-3];
    // } 
    // if (sortNums[0] < 0 && sortNums[1] < 0 && sortNums[2] < 0) {
    //     max = Math.max(max, sortNums[0]*sortNums[1]*sortNums[len-1]);
    // }
    
    return Math.max(
        sortNums[len-1]*sortNums[len-2]*sortNums[len-3], 
        sortNums[0]*sortNums[1]*sortNums[len-1]
    );
};