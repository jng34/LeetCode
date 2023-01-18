/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = helper(num, 0);
    return count;
};

var helper = function(num, steps) {
    // base case
    if (num === 0) return steps;
    
    if (num % 2 === 0) {
        num = num / 2;
    } else {
        num -= 1;
    }
    
    // recursion
    return helper(num, steps + 1);
}