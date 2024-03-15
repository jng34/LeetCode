/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  // O(m x n) time: m range from l -> r, n digits of max number in range
  // O(m) space
  
  const ans = [];
  // iterate from left to right and check if each n is self-dividing
  
  for (let i = left; i <= right; i++) {
    // convert number to string for iteration
    const numStr = String(i);
    
    // check if number is self-dividing
    for (let j = 0; j < numStr.length; j++) {
      if (i % +numStr[j] !== 0) break;
      if (j === numStr.length - 1) ans.push(i);
    }
  }
  
  return ans;
};