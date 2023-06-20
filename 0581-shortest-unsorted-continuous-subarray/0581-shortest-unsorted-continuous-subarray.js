/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const numsCopy = [...nums];
    numsCopy.sort((a,b) => a-b);
    let start = numsCopy.length, end = 0;
    for (let i=0; i<numsCopy.length; i++) {
        if (numsCopy[i] !== nums[i]) {
            start = Math.min(start, i);
            end = Math.max(end, i);
        }
    }
    return (end-start >= 0) ? (end-start+1) : 0;
};