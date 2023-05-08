/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    
    /*
    
        0  1  2
     0 [1, 2, 3]
     1 [4, 5, 6]
     2 [7, 8, 9]
    
    (0,0), (1,1), (2,2) - elems in primary diagonal
    (0,2), (1,1), (2,0) - elems in secondary diagonal
    
    */
    let j = mat.length - 1;
    for (let i = 0; i < mat.length; i++) {
        // Add elements primary diagonal
        sum += mat[i][i];
        // Add elements secondary diagonal
        if (i !== j) sum += mat[i][j];
        j--;
    }

    return sum;
    
};