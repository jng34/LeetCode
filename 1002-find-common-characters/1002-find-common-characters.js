/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  // use hash map to track freq of ch in each word
  // and then compare to each other
  
  // frequency of chars in first word
  const freq = {};
  for (let i = 0; i < words[0].length; i++) {
    const ch = words[0][i];
    freq[ch] = (freq[ch] || 0) + 1;
  }
  
  for (let i = 1; i < words.length; i++) {
    const curr = words[i];
    const currFreq = {};
    
    // track freq of current word
    for (let j = 0; j < curr.length; j++) {
      const ch = curr[j];
      currFreq[ch] = (currFreq[ch] || 0) + 1;
    }
    
    // update the frequency of the chars in first word
    for (let ch in freq) {
      if (ch in currFreq) {
        freq[ch] = Math.min(freq[ch], currFreq[ch]);
      } else {
        delete freq[ch];
      }
    }
    
  }
  
  // return the array of common letters in freq after comparisons
  let ans = [];
  
  for (let ch in freq) {
    while (freq[ch] > 0) {
      ans.push(ch);
      freq[ch]--;
    }
  }
  
  return ans;
};