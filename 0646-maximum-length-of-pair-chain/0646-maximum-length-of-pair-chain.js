/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((p1, p2) => p1[1]-p2[1]);
  let longest = 1;
  let b = pairs[0][1];
  
  for (let i=1; i<pairs.length; i++) {
    const [c, d] = pairs[i]; 
    if (b < c) {
      longest += 1;
      b = d;
    }   
  }
  
  return longest;
};