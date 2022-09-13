/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let j = 0;
  while (x >= j*j) {
    j++;
  }
  
  return (j*j === x) ? j : j-1
}

//time: O(n) 
//space: O(n)
 