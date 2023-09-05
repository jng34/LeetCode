/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // sort scores in ascending order
    let nums = [...score].sort((a,b) => a-b);
    let ans = [];
    
    // store ranks of scores in object
    let dict = {};
    
    let count = 1;
    let i = nums.length-1;
    
    while (i >= 0) {
        if (count === 1) dict[nums[i]] = 'Gold Medal';
        if (count === 2) dict[nums[i]] = 'Silver Medal';
        if (count === 3) dict[nums[i]] = 'Bronze Medal';
        if (count > 3) dict[nums[i]] = `${count}`;
        count++;
        i--;
    }
    
    // for each score, find the rank (val) of each score and push into ans array
    score.forEach(s => ans.push(dict[s]));
    
    return ans;
};