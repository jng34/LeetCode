/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  let results = new Set();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        if (words[j].includes(words[i]) && !results.has(words[i])) {
          results.add(words[i]);
        }
      }
    }
  }
  
  return Array.from(results);
};