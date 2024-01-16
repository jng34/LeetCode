/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

/*
  Pseudocode:
  Iterate through each match in matches.
  Destructure winner and loser.
  Use hash map to track each player's losses.
  Iterate through players in hash to find all losers of 0 or 1 match.
  Store players in 2D array, increasing order.
  Return 2D array
*/
var findWinners = function(matches) {
  const record = {};
  let answer = [[],[]];
  
  // Track each player's loss count.
  for (let match of matches) {
    const [winner, loser] = match;
    record[winner] = record[winner] || 0;
    record[loser] = (record[loser] || 0) + 1;
  }

  // Iterate through record and find losers of 0 or 1 match.
  for (let p in record) {
    const losses = record[p];
    if (losses === 0) answer[0].push(p);
    if (losses === 1) answer[1].push(p);
  }
  
  // Sort answer array in increasing order.
  answer[0].sort((a,b) => a-b);
  answer[1].sort((a,b) => a-b);
  
  return answer;
};