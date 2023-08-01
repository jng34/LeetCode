/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = [...num.toString(2)];
    for (let i=0; i<bin.length; i++) {
        if (bin[i] === '1') {
            bin[i] = '0';
        } else {
            bin[i] = '1';
        }
    }
    return parseInt(bin.join(''), 2)
};