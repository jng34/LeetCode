/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    -Create an object that counts # of each element
    -Find elem with value greater than n/2
    Time: O(n) 
    Space: O(n)
*/
var majorityElement = function(nums) {
    let majElem, count = 0;
    
    for (let n of nums) {
        if (count === 0) majElem = n;
        count += (n === majElem ? 1 : -1)
    }
    
    return majElem;
};

// var majorityElement = function(nums) {
//     const val = nums.length / 2;
//     let counter = {};
    
//     for (let n of nums) {
//         counter[n] = (counter[n] || 0) + 1;
//     }
    
//     for (let n in counter) {
//         if (counter[n] > val) return n;
//     }
// };