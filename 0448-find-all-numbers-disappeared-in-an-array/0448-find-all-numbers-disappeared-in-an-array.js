/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let missing = [];
    const allNums = {};
    
    for (let n of nums) {
        allNums[n] = true;
    }
    
    for (let i=1; i<=nums.length; i++) {
        if (!allNums[i]) missing.push(i);
    }   
    
    return missing;
};