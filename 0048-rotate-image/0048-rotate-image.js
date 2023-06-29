/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    matrix.reverse();
    for (let r=0; r<matrix.length; r++) {
        for (let c=r+1; c<matrix[0].length; c++) {
            [ matrix[r][c], matrix[c][r] ] = [ matrix[c][r], matrix[r][c] ]
            // let temp = matrix[r][c];
            // matrix[r][c] = matrix[c][r];
            // matrix[c][r] = temp;
        }
    }
};