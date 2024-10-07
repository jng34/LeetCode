/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  let stack = [];
  for (let ch of s) {
    if (!stack.length) {
      stack.push(ch);
      continue;
    }
    
    if (ch === 'B' && stack[stack.length - 1] === 'A') {
      stack.pop();
    } else if (ch === 'D' && stack[stack.length - 1] === 'C') {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  
  return stack.length;
};