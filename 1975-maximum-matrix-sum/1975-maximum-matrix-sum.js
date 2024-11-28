/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  //Count the number of negative numbers in matrix
  let negNums = 0;
  
  //Track num with smallest absolute val and make it negative
  let smallest = Infinity;
  
  // O(n^2) run-time
  for (let row of matrix) {
    for (let el of row) {
      if (el < 0) negNums++;
      smallest = Math.min(smallest, Math.abs(el));
    }
  }

  let totalSum = 0;
  // Sum up all elements
  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      totalSum += Math.abs(row[i]);
    }
  }
  
  // If negNums is even, change all negative nums to positive and return totalSum
  // If negNums is odd, change all nums to positive except smallest
  return (negNums % 2 === 0) ? totalSum : totalSum - (2 * smallest)
};