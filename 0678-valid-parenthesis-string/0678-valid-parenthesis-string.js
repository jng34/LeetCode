/**
 * @param {string} s
 * @return {boolean}
 */
// Dynamic Programming - Top down approach
var checkValidString = function (s) {
  // Recursion and Memoization
  // track count of openBrackets: +1 for open, -1 for close
  const memo = {};
  return isValidString(0, 0);

  // isValidString helper
  function isValidString(idx, openBrackets) {
    if (idx === s.length) return openBrackets === 0;
    if (openBrackets < 0) return false;
    
    const key = idx + ',' + openBrackets;
    if (key in memo) return memo[key];
    let isValid = false;

    if (s[idx] === '*') { // handle * case
      isValid = isValidString(idx + 1, openBrackets + 1) || // treat * as ( 
                isValidString(idx + 1, openBrackets - 1) || // treat * as )
                isValidString(idx + 1, openBrackets); // treat * as empty
    } else if (s[idx] === '(') {
        isValid = isValidString(idx + 1, openBrackets + 1); // increment for '('
    } else if (s[idx] === ')') { 
        isValid = isValidString(idx + 1, openBrackets - 1); // decrement for ')'
    }
    
    memo[key] = isValid;
    return memo[key];
  }
};