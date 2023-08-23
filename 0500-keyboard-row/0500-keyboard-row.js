/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let res = [];
  const keyRows = {
    1: new Set([...'qwertyuiop']),
    2: new Set([...'asdfghjkl']),
    3: new Set([...'zxcvbnm']),
  };
  
  let contains = true;
  for (let word of words) {
    const wordSet = [...new Set(word.toLowerCase())];
    for (let row in keyRows) {
      contains = true;
      for (let char of wordSet) {
        if (!keyRows[row].has(char)) {
          contains = false;
          break
        }
      }
      if (contains) res.push(word);
    } 
  }
  return res;
};