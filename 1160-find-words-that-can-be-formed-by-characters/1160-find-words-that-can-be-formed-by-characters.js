/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    /*
        initialize sum and count frequency of each character
        iterate through each word
        for each word check to see if there is enough chars in freq hash
        to make up word
        if true, add the length of word to sum
    */
    
    let sum = 0;
    let freq = {};
    for (let c of chars) {
        freq[c] = (freq[c] || 0) + 1;
    }
    
    for (let word of words) {
        let freqCopy = {...freq};
        let valid = true;
        for (let ch of word) {
            if (!freqCopy[ch]) {
                valid = false;
                break;
            }
            freqCopy[ch] = freqCopy[ch] - 1;
        }
        if (valid) sum += word.length;
    }
    
    return sum;
};