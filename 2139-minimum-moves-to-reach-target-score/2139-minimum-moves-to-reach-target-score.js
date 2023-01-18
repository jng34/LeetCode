/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */


var minMoves = function(target, maxDoubles) {
  let moves = 0;
  
  // If maxDoubles is greater than 0, keep dividing by 2 
  while (maxDoubles > 0) {
    if (target === 1) return moves;
    if (target % 2 === 0) {
      target /= 2;
      maxDoubles--;
    } else {
      target -= 1;
    }
    moves++;
  }
  
  // If maxDoubles is 0, then target - 1 = moves left to get to 1
  moves += target - 1;
  
  return moves;
};



