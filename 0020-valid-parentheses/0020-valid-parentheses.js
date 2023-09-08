/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const dict = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    
    for (let ch of s) {
        if (!(ch in dict)) {
            stack.push(ch);
        } else {
            const top = stack[stack.length-1];
            if (top === dict[ch]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};