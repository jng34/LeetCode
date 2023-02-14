/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  return words.filter(w1 => words.some(w2 => w2 !== w1 && w2.includes(w1)));
};