/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    const allFreqs = Object.values(freq);
    
    // use set to keep track of diff freqs
    const freqSet = new Set(); 
    
    // '"bbcebab"'
    // a = 3, b = 2, c = 2, e = 1
    // freqSet => { 3, 2 }
    
    let count = 0;    
    for (let freq of allFreqs) {
        let f = freq;
        while (f > 0 && freqSet.has(f)) {
            f--;
            count++;
        }
        freqSet.add(f);
    }    
    
    return count;
};