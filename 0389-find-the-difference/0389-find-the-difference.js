/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const sLetters = {};
  const tLetters = {};
  
  for (let char of s) {
    sLetters[char] = (sLetters[char] || 0) + 1;
  }
  
  for (let char of t) {
    tLetters[char] = (tLetters[char] || 0) + 1;
  }
  
  for (let key in tLetters) {
    if (!sLetters[key] || sLetters[key] !== tLetters[key]) {
      return key;
    }
  }
};