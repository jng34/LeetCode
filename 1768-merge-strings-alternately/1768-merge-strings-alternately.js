/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let res = '';
  let i = 0, j = 0;
    
    // a b c
    //  p q r
    // 
  while(i < word1.length && j < word2.length) {
    res += word1[i];
    res += word2[j];
    i++;
    j++;
  }  
  
  if (i !== word1.length) {
      res += word1.slice(i)
  }
  if (j !== word2.length) {
      res += word2.slice(j)
  }
  
  return res;
};