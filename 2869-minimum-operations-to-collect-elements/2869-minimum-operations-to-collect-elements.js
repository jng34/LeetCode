/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  // use a set to store nums from 1 to k, inclusive
  const numSet = new Set();
  for (let i = 1; i <= k; i++) {
    numSet.add(i);
  }
  
  // track # of operations
  let opers = 0;
  
  // pop off last elem in nums, and check against set
  while (nums.length > 0) {
    const last = nums.pop();
    opers++;
    
    // if num is in set, delete num from set
    if (numSet.has(last)) numSet.delete(last);  
    
    // exit loop when numSet is empty
    if (numSet.size === 0) break;
  }
  
  return opers;
};