/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const res = new Array(matrix[0].length).fill().map(() => Array(matrix.length).fill(0));

    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[0].length; j++) {
        res[j][i] = matrix[i][j]
      }
    }
    
    return res;
};