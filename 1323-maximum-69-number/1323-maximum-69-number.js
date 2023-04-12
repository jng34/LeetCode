/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numsArr = [...String(num)];    
    let i = 0;
    while (i < numsArr.length) {
        if (numsArr[i] === '6') {
            numsArr[i] = '9';
            break;
        } 
        i++;
    }
    return Number(numsArr.join(''));
};