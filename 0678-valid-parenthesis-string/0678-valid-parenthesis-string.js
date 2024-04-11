/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  // Use two stacks to track open brackets and asterisks
  // and balance close brackets
  let starStack = [];
  let openStack = [];
  
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(') {
      openStack.push(i);
    } else if (ch === '*') {
      starStack.push(i);
    } else {
      // ch is a closing bracket ')'
      if (openStack.length > 0) {
        openStack.pop();
      } else if (starStack.length > 0) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }
  
  // check to see if open brackets balance asterisks
  while (openStack.length > 0 && starStack.length > 0) {
    const open = openStack[openStack.length - 1];
    const star = starStack[starStack.length - 1];
    // if open idx is greater than star idx, then that means it cannot form a valid parentheses
    if (open > star) {
      return false;
    } else {
      openStack.pop();
      starStack.pop();
    }
  }
  
  // this means all open brackets are accounted for
  // remaining asterisks can be empty strings
  return openStack.length === 0;
};




