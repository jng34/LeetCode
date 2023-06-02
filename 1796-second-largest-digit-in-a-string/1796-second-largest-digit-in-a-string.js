/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let numsSet = new Set();
    for (let char of s) {
        if (!isNaN(char)) numsSet.add(Number(char));
    }
    
    let numsArr = [...numsSet].sort((a,b) => a-b);
    const max = numsArr[numsArr.length-1];
    
    while (numsArr.length > 0) {
        const num = numsArr.pop();
        if (num !== max) return num;
    }
    return -1;
};