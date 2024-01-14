/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  // return false if word lengths are unequal
  if (word1.length !== word2.length) return false;
  
  // count freq of each letter for each word 
  const freq1 = {}, freq2 = {};
  for (let i=0; i<word1.length; i++) {
    const ch1 = word1[i], ch2 = word2[i];
    freq1[ch1] = (freq1[ch1] || 0) + 1;
    freq2[ch2] = (freq2[ch2] || 0) + 1;
  }
  
  // return false if word2 contains a letter not found in word1, vice versa.
  for (let ch in freq2) {
    if (!(ch in freq1)) return false;
  }

  // Use sorted arrays to track all freq numbers and compare both words
  const arr1 = Object.values(freq1).sort((a,b) => a-b);
  const arr2 = Object.values(freq2).sort((a,b) => a-b);
  
  // Return false if both words do not contain same ratio of freqs
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};