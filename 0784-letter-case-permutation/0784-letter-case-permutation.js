/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const output = [];
    helper(0, s, '', output)
    return output;  
};

function helper(i, str, input, output) {
    // Base case
    if (i === str.length) {
        output.push(input);
        return;
    }
    
    if (isNaN(str[i])) {
        helper(i + 1, str, input + str[i].toLowerCase(), output);
        helper(i + 1, str, input + str[i].toUpperCase(), output);
    } else {
        helper(i + 1, str, input + str[i], output);
    }
    
    return;
}