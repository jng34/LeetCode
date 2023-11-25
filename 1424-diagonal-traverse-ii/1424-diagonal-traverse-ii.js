/**
 * @param {number[][]} nums
 * @return {number[]}
 */

/*
    [0,0] [0,1] [0,2] [0,3] [0,4]
    
    [1,0] [1,1] [1,2] [1,3] [1,4]
    
    [2,0] [2,1] [2,2] [2,3] [2,4]
    
    [3,0] [3,1] [3,2] [3,3] [3,4]
    
    [4,0] [4,1] [4,2] [4,3] [4,4]

*/


var findDiagonalOrder = function(nums) {
    // Num of rows = nums.length
    const n = nums.length;
    
    // Create a hash object to store diagonal values.
    const diagonals = {};
    
    // Create ans array.
    let ans = [];
   
    // Each diagonal has a sum.
    // Iterate from bottom to top, left to right.
    for (let r=n-1; r>=0; r--) {
        for (let c=0; c<nums[r].length; c++) {
            const sum = r+c;
            if (diagonals[sum]) {
                diagonals[sum].push(nums[r][c]);
            } else {
                diagonals[sum] = [nums[r][c]];
            }
        }
    }
    
    // Iterate through diagonals in order and fill ans.
    let i=0;
    
    while (i in diagonals) {
        ans.push(...diagonals[i]);
        i++;
    }
    
    return ans;
};






