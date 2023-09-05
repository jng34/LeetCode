/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // iterate through elements in each row
    // check if the next elem in diagonal, namely matrix[r+1][c+1] === matrix[r][c]
    // return true after all iterations, else false
    const m = matrix.length;
    const n = matrix[0].length;
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (r + 1 === m || c + 1 === n) continue;
            const el1 = matrix[r][c];
            const el2 = matrix[r + 1][c + 1];
            if (el1 !== el2) return false;
        }
    }
    
    return true;
};