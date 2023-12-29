/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // Create a hash map and map letters in order 
  const dict = {};
  for (let i=0; i<order.length; i++) {
    dict[order[i]] = i+1;
  }
  
  // Create sorting logic using the dict:
  // Iterate through each word in words
  // Find the first character index that differs
  // If ch in first word > ch in second word, return false
  // return true

  for (let i=0; i<words.length-1; i++) {
    for (let j=0; j<words[i].length; j++) {
      if (j > words[i+1].length-1) return false;
      if (words[i][j] !== words[i+1][j]) {
        if (dict[words[i][j]] > dict[words[i+1][j]]) return false;
        break;
      }
    }
  }

  return true;
};