/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // abcde -> bcdea -> cdeab -> deabc -> eabcd -> abcde
    // find the length of s and use modulo operator to find where it repeats
    const newStr = s + s;
    const n = s.length;
    const m = goal.length;
    return newStr.includes(goal) && n === m;
};