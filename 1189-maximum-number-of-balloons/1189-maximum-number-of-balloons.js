/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const balloon = 'balon';
    let freq = {};
    let minOne = Infinity, minTwo = Infinity;
    for (let char of text) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    for (let char of balloon) {
        if (!freq[char]) return 0;
        if (char === 'l' || char === 'o') {
            minTwo = Math.min(minTwo, freq[char]);
        } else {
            minOne = Math.min(minOne, freq[char]);
        }        
    }
    
    if (minTwo < 2) return 0;
    minTwo = Math.floor(minTwo/2);
    
    return minTwo <= minOne ? minTwo : minOne 
};