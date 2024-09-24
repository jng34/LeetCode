/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let ans = [];
  for (let i = 1; i <= 9; i++) {
    generateLexNums(i);
  }
  return ans;
  
  
  // Helper fn
  function generateLexNums(num) {
    if (num > n) return;
    ans.push(num);
    
    for (let i = 0; i <= 9; i++) {
      const nextNum = num * 10 + i;
      if (nextNum <= n) {
        generateLexNums(nextNum);
      } else {
        break;
      }
    }
  }
};