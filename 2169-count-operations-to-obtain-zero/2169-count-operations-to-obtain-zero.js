/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2, count = 0) {
  // Base case
  if (num1 === 0 || num2 === 0) return count;
  
  // Operations
  if (num1 >= num2) {
    num1 = num1 - num2;
  } else {
    num2 = num2 - num1;
  }
  
  return countOperations(num1, num2, count + 1);
};