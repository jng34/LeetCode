/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  let count = 0;
  
  const vowels = new Set([...'aeiou']);
  
  for (let i=left; i<=right; i++) {
    if (vowels.has(words[i].at(0)) && vowels.has(words[i].at(-1))) {
      count++;    
    }
  }
  
  return count;
};