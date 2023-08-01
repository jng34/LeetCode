/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xBin = x.toString(2);
    const yBin = y.toString(2);
    let len = y >= x ? yBin.length : xBin.length;
    let xBin2 = xBin.padStart(len, '0');
    let yBin2 = yBin.padStart(len, '0');
    
    let hamming = 0;
    let i = 0;
    while (i < len) {
        if (xBin2[i] !== yBin2[i]) hamming++;
        i++;
    }
    return hamming;
};