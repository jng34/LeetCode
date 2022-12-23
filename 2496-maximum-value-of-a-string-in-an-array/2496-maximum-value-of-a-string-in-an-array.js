/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let maxLength = 0;
    for (let str of strs) {
        let currMax = isNaN(str) ? str.length : Number(str)
        console.log(currMax)
        maxLength = Math.max(maxLength, currMax); 
    }
    return maxLength;
};