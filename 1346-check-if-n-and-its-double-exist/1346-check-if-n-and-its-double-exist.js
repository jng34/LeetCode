/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  // For each el, store el * 2 and el / 2 in a set
  // Iterate through rest of els, 
  // Check if double or half value of el exists, return true if so
  // Else, store double and halve values
  const values = new Set();
  
  for (let n of arr) {
    const double = 2*n;
    const half = n/2;
    if (values.has(half) || values.has(double)) {
      return true;
    } else {
      values.add(n);
    }
  }
 
  return false;
};