/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = 'AEIOUaeiou';
    const vowelSet = new Set([...vowels]);
    const freq = {};
    let t = '';
    
    for (let ch of s) {
        if (vowelSet.has(ch)) {
            freq[ch] = (freq[ch] || 0) + 1;
        }
    }
    
    let j = 0;

    for (let ch of s) {
        if (!vowelSet.has(ch)) {
            t += ch;
        } else {
            while (!freq[vowels[j]]) j++;
            t += vowels[j];
            freq[vowels[j]] = freq[vowels[j]] - 1;
        }
    }

    return t;
};