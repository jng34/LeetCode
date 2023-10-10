/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    /*
        Find max subseq by using indices rather than arrays
        Create a hash table with elems as keys and +/- 1 pairs as values
        Iterate through nums and see if each elem contains any of the pairs
        Keep count of length variable with indices
        Update max length
    */
    let max = 0;
    const numsObj = {};
    nums.forEach(n => numsObj[n] = (numsObj[n] || 0) + 1);

    for (let n in numsObj) {
        if (numsObj[Number(n)+1]) {
            max = Math.max(max, numsObj[n] + numsObj[Number(n)+1]);
        }
    }
    
    return max;
};