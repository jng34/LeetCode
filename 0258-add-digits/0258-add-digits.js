/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let res = num;
    while (res >= 10) {
        let sum = res % 10;
        let n = 10;
        while (Math.floor(res/n) > 0) {
            sum += Math.floor(res/n) % 10;   
            n *= 10;
        }
        res = sum;
    }
    return res;
};