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
      // if i matches target[j], then just push & increment i and j
      opers.push("Push");
      i++;
      j++;
    } else {
      // if i does NOT match target[j], then push & pop & increment i ONLY
      opers.push("Push", "Pop");
      i++;
    }
  }
  
  return opers;
};