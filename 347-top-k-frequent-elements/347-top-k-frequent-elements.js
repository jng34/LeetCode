/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    //create obj to store count of each num in sortedNums
    let freqObj = {};   
    for (let num of nums) {
        freqObj[num] = freqObj[num] + 1 || 1;
    }
    
    return Object.entries(freqObj).sort((a,b) => b[1]-a[1]).map(val => Number(val[0])).slice(0, k);
};