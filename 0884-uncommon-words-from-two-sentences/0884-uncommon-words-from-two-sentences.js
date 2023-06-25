/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let uncommon = [];
    const dict = {};
    const s1Words = s1.split(' ');
    const s2Words = s2.split(' ');
    for (let word of s1Words) {
        dict[word] = (dict[word] || 0) + 1;
    }
    for (let word of s2Words) {
        dict[word] = (dict[word] || 0) + 1;
    }
    for (let word in dict) {
        if (dict[word] === 1) {
            uncommon.push(word);
        }
    }
    return uncommon;
};