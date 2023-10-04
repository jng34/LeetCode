/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    let str = s;
    while (str.length > k) {
        let temp = [];
        let count = k;
        let sum = 0;
        for (let i=0; i<str.length; i++) {
            sum += +str[i];
            count--;
            if (i+1 === str.length) {
                temp.push(''+sum);
                break
            }
            if (count === 0) {
                temp.push(''+sum);
                sum = 0;
                count = k;
            }
        }
        str = temp.join('');
    }
    return str;
};