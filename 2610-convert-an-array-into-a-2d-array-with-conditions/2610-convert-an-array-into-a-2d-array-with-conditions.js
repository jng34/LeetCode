/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Count freq of each n in nums using hashmap.
//If n not in freq, add to hashmap (val = 0) 
//and to first row of ans.
//If n in freq, increment count by 1.
//while freq.size > 0:
//  iterate through n in freq and add to a new row (array)
//  add to ans

var findMatrix = function(nums) {
    const freq = new Map();
    const n = nums.length;
    let ans = [];
    
    // Track freq of each n
    for (let i=0; i<n; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }
    
    while (freq.size > 0) {
        let row = [];
        for (let el of freq.keys()) {
            // add a unique element from map
            row.push(el);
            // decrement count of that el
            freq.set(el, freq.get(el) - 1);
            // if freq of el is 0, delete from map
            if (freq.get(el) === 0) freq.delete(el);
        }
        // add row to ans
        ans.push(row);
    }
    
    return ans;
};