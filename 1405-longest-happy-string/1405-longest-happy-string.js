/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
  /*
    Greedy approach: 
    Choose from max number of occurrences between a, b, or c
    Decrement number and add letter to happyStr
    Check to see if the curr letter is the 3rd occurrence or not
    If so, choose next letter of greatest occurrence
    Continue this until all the letters are used up or criteria fails
  */
  
  let happyStr = '';
  let countA = 0, countB = 0, countC = 0;
  const totalCount = a + b + c;
  
  for (let i = 1; i <= totalCount; i++) {
    if ((a >= b && a >= c && countA < 2) || 
       (a > 0 && (countB == 2 || countC == 2)))  {
      happyStr += 'a';
      countA++;
      a--;
      countB = 0;
      countC = 0;
    } else if ((b >= a && b >= c && countB < 2) || 
       (b > 0 && (countC == 2 || countA == 2))) {
      happyStr += 'b';
      countB++;
      b--;
      countA = 0;
      countC = 0;
    } else if ((c >= a && c >= b && countC < 2) || 
       (c > 0 && (countA == 2 || countB == 2))) {
      happyStr += 'c';
      countC++;
      c--;
      countA = 0;
      countB = 0;
    }
  }
    
  return happyStr;
};