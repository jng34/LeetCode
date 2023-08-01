/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const freq = { 'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0 };
    for (let char of text) {
        freq[char]++;
    }
    return Math.floor(
        Math.min(freq['b'], freq['a'], freq['l']/2, freq['o']/2, freq['n'])
    )
};