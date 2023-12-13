/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */


var minDistance = function(word1, word2, i=0, j=0, memo={}) {
  // DP Memoization - iterate and compare the first letter of each word
  const key = i + ',' + j;
  if (key in memo) return memo[key];
  if (i === word1.length && j === word2.length) return 0;
  if (i === word1.length) return word2.length - j;
  if (j === word2.length) return word1.length - i;
  
  // if first letters are equal, recurse to check the next letters
  if (word1[i] === word2[j]) {
    return minDistance(word1, word2, i+1, j+1, memo);
  }

  // else perform insertion, deletion, and replacement
  const insertion = 1 + minDistance(word1, word2, i, j+1, memo);
  const deletion = 1 + minDistance(word1, word2, i+1, j, memo);
  const replacement = 1 + minDistance(word1, word2, i+1, j+1, memo);
  // memoized & return minimum of insertion, deletion, and replacement
  memo[key] = Math.min(insertion, deletion, replacement);

  return memo[key];
};