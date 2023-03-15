/**
 * @param {string} s
 * @return {boolean}
 */

// "( ( { [ ] } ) )"
var isValid = function(s) {
    let stack = [];
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if ( char === "(" || char === "{" || char === "[" ) {
            stack.push(char);
        } else {
          const last = stack[stack.length-1];  
          if (obj[last] === char) {
            stack.pop();
          } else {
            stack.push(char)
          }
        }
    }
    return stack.length === 0;
};