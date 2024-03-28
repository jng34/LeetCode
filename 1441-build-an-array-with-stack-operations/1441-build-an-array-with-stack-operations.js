/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {  
  // track # operations
  let opers = [];
  let i = 1, j = 0;
  
  while (j < target.length) {
    if (i === target[j]) {
      opers.push("Push");
      i++;
      j++;
    } else {
      opers.push("Push", "Pop");
      i++;
    }
  }
  
  return opers;
};