/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let j = 0;
  while (x >= j*j) {
    j++;
  }
  
  if (j*j === x) {
    return j;
  } else {
    return j-1;
  }
}
 