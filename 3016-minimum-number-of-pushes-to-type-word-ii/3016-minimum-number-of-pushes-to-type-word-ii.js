/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  // minimize key presses to type word
  // 8 keys to map letters
  // find num of unique letters n
  
  const chars = {};
  for (let ch of word) {
    chars[ch] = (chars[ch] || 0) + 1;
  }
  
  const n = Object.keys(chars).length;
  const freq = Object.entries(chars).sort((a,b) => b[1]-a[1]); //sort in DESC freq
  
  let minPushes = 0;
  
  // if num n of unique letters <= 8, then each key/letter is 1
  if (n <= 8) {  
    for (let [key, val] of freq) {
      minPushes += val;
    }
  } else {
    // if num n of unique letters > 8, calc num of letters
    let presses = 1;
    
    for (let i=0; i<freq.length; i++) {
      const [key, val] = freq[i];
      minPushes += val * presses;
      if ((i + 1) % 8 === 0) presses++;
    }
  }
  
  return minPushes;
};