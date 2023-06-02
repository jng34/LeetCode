/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -Infinity;
    let second = -Infinity;
    for (let char of s) {
        if (!isNaN(char)) {
            if (char > largest && char > second) {
                second = largest
                largest = Number(char);
            }
            if (char > second && char < largest) {
                second = Number(char);   
            }
        }
    }
    return second === -Infinity ? -1 : second;
};