/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

// Pseudo-code:
// For each word in words:
//   Split by separator
//   Add to result array
// Return result

var splitWordsBySeparator = function(words, separator) {
  let res = [];
  
  words.forEach(word => {
    const separated = word.split(separator);
    separated.forEach(w => {
      if (w !== '') res.push(w);
    })
  });
  
  return res;
};