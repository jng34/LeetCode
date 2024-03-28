/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let ans = 0;
    
    // sort heights (expected) and compare the indices with heights
    const expected = [...heights].sort((a,b) => a-b);
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) ans++;
    }
    
    return ans;
};