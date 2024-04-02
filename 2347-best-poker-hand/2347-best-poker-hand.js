/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
  // track best possible hands with hashmap
  const hands = {};
  
  // iterate through suits and ranks
  for (let i = 0; i < suits.length; i++) {  
    // count freq of suits for possible "Flush"
    hands[suits[i]] = (hands[suits[i]] || 0) + 1;
    
    // count cards with same rank
    hands[ranks[i]] = (hands[ranks[i]] || 0) + 1;
  }
  
  
  // Check for flush first
  for (let c in hands) {
    if (!Number.isInteger(+c) && hands[c] === 5) {
       return "Flush";
    }
  }
  
  // then check for trips
  for (let c in hands) {
    if (Number.isInteger(+c) && hands[c] >= 3) {
      return "Three of a Kind";
    }
  }
  
  // check for a pair
  for (let c in hands) {
    if (Number.isInteger(+c) && hands[c] === 2) {
      return "Pair";
    }
  }
  
  return "High Card";
};