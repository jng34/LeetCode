/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let leftBrackets = 0, rightBrackets = 0, max = 0;
  
  //Scan Left to Right 
  for (let i=0; i<s.length; i++) {
    if (s[i] == '(') {
      leftBrackets++;
    } else {
      rightBrackets++;
    }
    
    if (leftBrackets === rightBrackets) max = Math.max(max, 2*rightBrackets);
    
    if (rightBrackets > leftBrackets) {
      leftBrackets = 0;
      rightBrackets = 0;
    }
  }
  
  //Scan Right to Left
  leftBrackets = 0;
  rightBrackets = 0;
  for (let j=s.length-1; j>=0; j--) {
    if (s[j] == '(') {
      leftBrackets++;
    } else {
      rightBrackets++;
    }
    
    if (leftBrackets === rightBrackets) max = Math.max(max, 2*leftBrackets);
    
    if (rightBrackets < leftBrackets) {
      leftBrackets = 0;
      rightBrackets = 0;
    }
  }
  
  return max;
};