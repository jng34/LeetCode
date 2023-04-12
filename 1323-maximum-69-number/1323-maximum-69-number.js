/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numsArr = [...String(num)];
    let maxNum = num;
    
    for (let i=0; i<numsArr.length; i++) {
        // For each index, change 9 to 6 or 6 to 9
        if (numsArr[i] === '9') {
            numsArr[i] = '6';
        } else {
            numsArr[i] = '9';
        }
        
        // Convert back to number and compare max 
        const newNum = Number(numsArr.join(''));
        maxNum = Math.max(maxNum, newNum);
        
        // Convert back to original number
        if (numsArr[i] === '9') {
            numsArr[i] = '6';
        } else {
            numsArr[i] = '9';
        }   
    }

    return maxNum;
};