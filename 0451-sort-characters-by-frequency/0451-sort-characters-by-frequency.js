/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // count freq of each letter
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // sort characters in descending order based on freq
  const chars = Object.entries(freq);
  chars.sort((a, b) => b[1] - a[1]);

  // create sorted string beginning with most frequent letter.
  let ans = '';
  for (let entry of chars) {
    const [ch, freq] = entry;
    for (let t = 0; t < freq; t++) {
      ans += ch;
    }
  }

  return ans;
};