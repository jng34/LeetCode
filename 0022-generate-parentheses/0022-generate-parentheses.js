/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 1) return ['()'];
  let res = [];
  helper(n, n, ''); 
  return res;
  
  //Helper function
  function helper(open, close, combo) {
    if (close < open) return;
    if (close === 0 && open === 0) return res.push(combo);
    if (open > 0) helper(open-1, close, combo+'(');
    if (close > 0) helper(open, close-1, combo+')');
  }
};