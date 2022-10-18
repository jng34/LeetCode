/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        
        let diff = target - nums[i];
        
        if (diff in numsObj) return [numsObj[diff], i];
        
        numsObj[nums[i]] = i;
    }
    return null;
};

// O(n^2) time complexity
// O(1) space complexity;
// var twoSum = function(nums, target) {
//     for (let i=0; i<nums.length-1; i++) {
//         for (let j=i+1; j<nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i,j]
//             }
//         }
//     }
//     return []
// };