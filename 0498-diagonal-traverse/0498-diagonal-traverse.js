/**
 * @param {number[][]} mat
 * @return {number[]}
 */

/*
  The sum of indices in elems of each diagonal is unique, e.g. 0,1,2,3,etc.
  Alternately, add elems of each diagonal into ans array.
  Save each sum in a hash map.
  Even sum diagonals: bottom-top, left-right
  Odd sum diagonals: top-bottom, right-left
*/

var findDiagonalOrder = function(mat) {
  const diagonals = {};
  const m = mat.length;
  const n = mat[0].length;
  
  for (let r=m-1; r>=0; r--) {
    for (let c=0; c<n; c++) {
      const sum = r+c;
      
      if (diagonals[sum]) {
        diagonals[sum].push(mat[r][c]);
      } else {
        diagonals[sum] = [mat[r][c]];
      }
    }
  }
  
  let ans = [];
  let i = 0;
  
  while (i in diagonals) {
    if (i % 2 === 1) {
      ans.push(...diagonals[i].reverse());
    } else {
      ans.push(...diagonals[i]);
    }
    i++;
  }
  
  return ans;
};