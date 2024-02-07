/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  // Main code
  // create set for allowed
  const allowedSet = new Set(allowed);
  let ans = 0;
  for (let word of words) {
    if (checkConsistency(word)) ans++;
  }
  return ans;


  // helper function to check if all chars in word appears in allowed
  function checkConsistency(word) {
    return word.split('').every((ch) => allowedSet.has(ch));
  }
};