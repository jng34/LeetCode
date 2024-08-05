/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  // use object to track and count words in words1 and words2
  const dict1 = {}, dict2 = {};
  
  words1.forEach((w) => dict1[w] = (dict1[w] || 0) + 1);
  words2.forEach((w) => dict2[w] = (dict2[w] || 0) + 1);
  
  // count number of strings appearing once
  let ans = 0;
  
  for (let w of words2) {
    if (dict1[w] === 1 && dict2[w] === 1) ans++;
  }
  
  return ans;
};