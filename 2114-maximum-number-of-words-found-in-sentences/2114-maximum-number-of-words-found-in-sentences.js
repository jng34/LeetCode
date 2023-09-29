/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = -Infinity;
    sentences.forEach(s => max = Math.max(max, s.split(' ').length));
    return max;
};