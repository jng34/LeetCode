/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  // For each word in words, compare its length and index to current prefix (index) of s
  let currIdx = 0;
  
  for (let word of words) {
    const len = word.length;
    const prefix = s.substring(currIdx, currIdx + len);
    if (s.substring(currIdx, currIdx + len) !== word) return false;
    currIdx += len;
    if (currIdx >= s.length) break;
  }
  
  return currIdx >= s.length;
};