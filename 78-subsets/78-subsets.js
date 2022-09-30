/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
e.g. [1, 2,  3]
      i      j
      i=0, j=2
res = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3] ]      
use two pointers i and j to iterate

*/

var subsets = function(nums) {
    
    let result = [[]];
    
    for (let i = 0; i < nums.length; i++) {
        
        let length = result.length;
        
        for (let j = 0; j < length; j++) {
            result.push([...result[j], nums[i]]);
        }
    }
    
    return result;

};