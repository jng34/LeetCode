/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  // Sum up all 1s in s.
  let ones = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] === '1') ones++;
  }
  
  let score = 0;
  let zeroes = 0;

  // Iterate through s.
  for (let i=0; i<s.length-1; i++) {
    
    if (s[i] === '1') { // If element is 1, decrement from ones count 
      ones--;
    } else { // else increment zeroes.
      zeroes++;
    }
    
    // Sum up score and update max score.
    score = Math.max(score, zeroes + ones);
  }
  
  return score;
};