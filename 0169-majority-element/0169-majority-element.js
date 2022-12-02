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
// var majorityElement = function(nums) {
//     const val = nums.length / 2;
//     let majElem, count;
    
//     for (let n of nums) {
//         if (n)
//     }
// };

var majorityElement = function(nums) {
    let counter = {};
    
    for (let n of nums) {
        counter[n] = (counter[n] || 0) + 1;
    }
    
    for (let n in counter) {
        if (counter[n] > nums.length/2) return n;
    }
};