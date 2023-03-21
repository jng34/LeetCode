/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let zeroesBefore = 0;
    /*
        [1,3,0,0,0,2,0,0,4]
                   i
        count = 1 + 2 + 3
        zeroesBefore = 0
    */
    
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            count += zeroesBefore + 1;
            zeroesBefore++;
        } else {
            zeroesBefore = 0;
        } 
        i++;
    }
    
    return count;
};