/**
 * @param {number[][]} mat
 * @return {number}
 */

// Brute force
// Iterate through matrix.
// if matrix[r][c] === 1, 
//   iterate through r to see if there are any other 1s
//   iterate through c to see if thera re any other 1s
//   if not, then increment count by 1
// Return count 

var numSpecial = function(mat) {
  // Track special count.
  let count = 0;
  
  // Iterate through matrix.
  for (let r=0; r<mat.length; r++) {
    for (let c=0; c<mat[0].length; c++) {
      if (mat[r][c] === 1) {
        let good = true;
        
        // check rest of row for any other 1s.
        for (let col=0; col<mat[0].length; col++) {
          if (col !== c && mat[r][col] === 1) {
            good = false;
            break;
          }
        }  
        
        // check rest of col for any other 1s.
        for (let row=0; row<mat.length; row++) {
          if (row !== r && mat[row][c] === 1) {
            good = false;
            break;
          }
        }   
      
        // increment count if good is true.
        if (good === true) count++;
      }
    }
  }
  
  return count;
};