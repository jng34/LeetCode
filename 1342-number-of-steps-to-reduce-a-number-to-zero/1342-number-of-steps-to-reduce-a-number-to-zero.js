/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, steps = 0) {
    if (num === 0) return steps;
    num = num % 2 === 0 ? num / 2 : --num;
    return numberOfSteps(num, steps + 1);
};
