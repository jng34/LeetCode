/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 1) return ["()"];
    let result = [];
    helper(n, n, '', result);
    return result;
};

/*

*/
function helper(open, close, str, result) {
  // Open parentheses '(' must be greater than 
  // close parentheses ')' at all times to stay valid
  if (open > close) return;   
  
  // Base case
  if (open === 0 && close === 0) {
    result.push(str);
    return;
  }
  
  if (open > 0) {
    helper(open - 1, close, `${str}(`, result);
  }
  
  if (close > 0) {
    helper(open, close - 1, `${str})`, result);
  }
}