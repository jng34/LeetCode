/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let stack = [];
  let results = [];
  
  var backTrack = function(open, close) {
    if (open === n && close === n) {
      results.push(stack.join(''));
      return;
    }
    
    if (open < n) {
      stack.push('(');
      backTrack(open + 1, close);
      stack.pop();
    }
    
    if (close < open) {
      stack.push(')');
      backTrack(open, close + 1);
      stack.pop();
    }
  }
  
  backTrack(0, 0);
  return results;
};