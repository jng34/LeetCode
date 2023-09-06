/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    return Number(Function("return " + s)());
};