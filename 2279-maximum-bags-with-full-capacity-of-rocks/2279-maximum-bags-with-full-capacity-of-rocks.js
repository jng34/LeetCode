/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  let rocksNeeded = new Array(capacity.length).fill(0);
  
  for (let i = 0; i < capacity.length; i++) {
    rocksNeeded[i] = capacity[i] - rocks[i];
  }
  
  let maxBags = 0;
  rocksNeeded.sort((a,b) => a-b);
  
  for (let r = 0; r < rocksNeeded.length; r++) {
    if (rocksNeeded[r] === 0) {
      maxBags++;
    } else if (additionalRocks >= rocksNeeded[r]) {
        additionalRocks -= rocksNeeded[r];
        maxBags++;
    }
  }
  
  return maxBags;
};