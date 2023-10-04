/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    // create a hashmap with letters as keys and corresponding numbers as values
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = {};
    for (let i=0; i<letters.length; i++) {
        alpha[letters[i]] = i+1;
    }

    // convert letters to integers
    let strArr = [];
    for (let c of s) {
        strArr.push(alpha[c]);
    }
    
    // transform k times
    let res = strArr.join('');
    for (let i=0; i<k; i++) {
        let sum = 0;
        for (let n of res) {
            sum += +n;
        }
        res = ''+sum;
    }
    
    return res;
};