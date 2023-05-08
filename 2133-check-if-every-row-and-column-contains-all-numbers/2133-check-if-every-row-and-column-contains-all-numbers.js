/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    // Create a set of nums from 1 to n
    const n = matrix.length;
    const nums = new Set();
    for (let i = 1; i <= n; i++) {
        nums.add(i);
    }
    
    //Check rows 
    for (let r = 0; r < n; r++) {
        let tempRow = new Set();
        for (let c = 0; c < n; c++) {
            tempRow.add(matrix[r][c]);
        }
        if (tempRow.size !== nums.size) return false;
    }
    
    //Check cols 
    for (let r = 0; r < n; r++) {
        let tempCol = new Set();
        for (let c = 0; c < n; c++) {
            tempCol.add(matrix[c][r]); 
        }
        if (tempCol.size !== nums.size) return false;
    }
    
    return true;
};
