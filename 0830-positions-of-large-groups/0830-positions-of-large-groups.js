/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let ans = [];
  
  // iterate through s and find large groups
  // add to answer the [start, end] indices for each group 
  let idxArr = [0, 0];
  let prev = s[0];
  
  for (let i = 1; i < s.length; i++) {
    const curr = s[i];
    if (prev === curr) {
      // update end index 
      idxArr[1] = i;
    } else {
      // if idxArr difference is a large group (3+), add to answer
      const diff = idxArr[1] - idxArr[0] + 1;
      if (diff >= 3) ans.push(idxArr);
      
      // reset and start new tracking
      prev = curr;
      idxArr = [i, i];
    }
    
    const diff = idxArr[1] - idxArr[0] + 1;
    if (i + 1 === s.length && diff >= 3) ans.push(idxArr);
  }
  
  
  return ans;
};