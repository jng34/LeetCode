/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {

  //e.g. [5,1,3,2] > [5,3,3,2,1]
  //                          i
  // opers = 1 + 3 + 4 = 8

  //e.g. [1,1,2,2,3] > [3,3,3,3,2,2,1,1]
  //                                i
  // opers = 4 + 6 = 10
  
  let opers = 0;

  // Sort nums array in descending order.
  nums.sort((a,b) => b-a);

  // Iterate through nums.
  for (let i=1; i<nums.length; i++) {
    // If next elem doesn't equal prev elem:
    if (nums[i] != nums[i-1]) {
      // Increment opers by num of elems before).
      opers += i;
    }
  }
  
  return opers;  
};