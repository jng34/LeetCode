/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    /*
        Get the frequency of each element in a hashmap
        Find n/2.
        Iterate through all elements (keys) and return 
        the elem that has a freq > n/2.
    */
    
    const freq = {};
    const n = nums.length;
    
    nums.forEach(n => {
        freq[n] = (freq[n] || 0) + 1;
    });
    
    for (let el in freq) {
        if (freq[el] > n/2) return el;
    }
};