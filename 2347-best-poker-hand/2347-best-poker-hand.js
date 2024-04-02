/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
  // Sequentially check from best to worst hand
  
  // Check for a flush
  for (let i = 1; i < suits.length; i++) {
    if (suits[i-1] !== suits[i]) break;
    if (i === 4) return "Flush";
  }
  
  // Check for three of a kind
  const freq = {};
  for (let r of ranks) {
    freq[r] = (freq[r] || 0) + 1;
    if (freq[r] === 3) return "Three of a Kind";
  }
  
  // Check for a pair
  for (let c in freq) {
    if (freq[c] === 2) return "Pair";
  }
  
  // Else return high card
  return "High Card";
};