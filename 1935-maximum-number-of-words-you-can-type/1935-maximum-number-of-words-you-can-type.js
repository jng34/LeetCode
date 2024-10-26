/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  /*
    Split up text into an array of words.
    For each word, check to see if it does NOT contain any of the broken letters.
    If so, increment a count variable for the words.
    
    m = number of words in text
    n = number of broken letters
    Time: O(m || n) - greater of the two
    Space: O(m + n)
  */
  
  const words = text.split(' ');
  const keySet = new Set();
  for (let l of brokenLetters) {
    keySet.add(l);
  }
  
  let count = 0;
  
  for (let word of words) {
    let canType = true;
    for (let ch of word) {
      if (keySet.has(ch)) {
        canType = false;
        break;
      }
    }
    if (canType) count++;
  }
  
  return count;
};