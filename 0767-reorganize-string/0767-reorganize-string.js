/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  /*
    Greedy approach:
    Count all freq of occurrences for each letter.
    Sort entries in desc order.
    Make sure adjacent characters are not the same.
  */
  let freq = {};
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let sortedChs = [...Object.keys(freq)].sort((a,b) => freq[b] - freq[a]);
  
  let ans = '';
  
  // Condition: while count < n OR when there are adjacent chs
  while (sortedChs.length >= 2) {
    const ch1 = sortedChs.shift();
    const ch2 = sortedChs.shift();
     
    ans = ans + ch1 + ch2;
    
    if (--freq[ch1] > 0) sortedChs.push(ch1);
    if (--freq[ch2] > 0) sortedChs.push(ch2);
    
    sortedChs.sort((a,b) => freq[b] - freq[a]);
  }
  
  if (sortedChs.length) {
    const ch = sortedChs[0];
    if (freq[ch] > 1) return "";
    ans += ch;
  }
  
  return ans;
};