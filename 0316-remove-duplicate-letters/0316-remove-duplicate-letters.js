/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let seen = new Set();
    let lastIndices = {};
    
    for (let i=0; i<s.length; i++) {
        lastIndices[s[i]] = i;
    }
    
    for (let i=0; i<s.length; i++) {
        let curr = s[i];
        if (!seen.has(curr)) {
            while (stack && 
               stack[stack.length-1] > curr && lastIndices[stack[stack.length-1]] > i
            ) {
                let popped = stack.pop();
                seen.delete(popped);
            }
            stack.push(curr);
            seen.add(curr);
        }
    }

    return stack.join('');
};