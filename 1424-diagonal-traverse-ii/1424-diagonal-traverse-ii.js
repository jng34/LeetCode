/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const n = nums.length;
    let queue = [[0,0]];
    let ans = [];
    
    while (queue.length > 0) {
        const [r,c] = queue.shift();
        ans.push(nums[r][c]);
        if (c === 0 && r + 1 < n) {
            queue.push([r + 1, c])
        }
        if (c + 1 < nums[r].length) {
            queue.push([r, c + 1]);
        }
    }
    
    return ans;
};