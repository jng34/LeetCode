/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  // Check if num of values in original matrix equals product of r and c
  const numOfVals = mat.length * mat[0].length;
  if (r*c !== numOfVals) return mat;
  
  // All values of original matrix
  const vals = mat.flat(); 
  
  // Build new matrix with r rows and c columns
  const newMatrix = Array(r).fill().map(() => Array(c).fill(0))
  for (let i=0; i<newMatrix.length; i++) {
    for (let j=0; j<newMatrix[0].length; j++) {
      newMatrix[i][j] = vals.shift()
    }
  }

  return newMatrix;
};