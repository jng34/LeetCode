/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let uncommon = [];
    const s1Words = s1.split(' ');
    const s2Words = s2.split(' ');
    const s1Counter = {};
    const s2Counter = {};
    for (let word of s1Words) {
        s1Counter[word] = (s1Counter[word] || 0) + 1;
    }
    for (let word of s2Words) {
        s2Counter[word] = (s2Counter[word] || 0) + 1;
    }
    
    for (let word of s1Words) {
        if (s1Counter[word] === 1 && !(word in s2Counter)) {
            uncommon.push(word);
        }
    }
    
    for (let word of s2Words) {
        if (s2Counter[word] === 1 && !(word in s1Counter)) {
            uncommon.push(word);
        }
    }
    return uncommon;
};