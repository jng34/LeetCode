/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let count = 0;
  
  for (let arr of grid) {
    let i = arr.length-1;
    while (i >= 0) {
      if (arr[i] < 0) count++;
      if (arr[i-1] >= 0) break;
      i--;
    }     
  } 
    
  return count;
};