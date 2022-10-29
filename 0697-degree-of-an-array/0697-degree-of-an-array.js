/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    // Use an object to store frequency of element occurrences 
    let freq = {};
    for (let n of nums) {
        freq[n] = (freq[n] || 0) + 1;
    };
    
    // let start, end, s = 1, count = 0;
    let maxFreq = Math.max(...Object.values(freq));
    let keys = Object.keys(freq).filter(key => freq[key] === maxFreq)
    let smallest = Infinity;
    
    // For each element that has same degree
    for (let i = 0; i < keys.length; i++) {
        // Get start and end indices
        let start = 0, end = nums.length-1, len;
        while(start < nums.length) {
            if (nums[start] === Number(keys[i])) break;
            start++;
        }
        while(end >= 0) {
            if (nums[end] === Number(keys[i])) break;
            end--;
        }
        // console.log(start, end)
        len = end - start + 1;
        smallest = Math.min(smallest, len);
    }
    
    return smallest;
};