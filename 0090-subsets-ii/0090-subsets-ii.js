/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let index = 0;
  nums.sort((a,b) => a-b);
  let results = [[]];
  
  for (let i = 0; i < nums.length; i++) {
    let length = results.length;
    for (let j = index; j < length; j++) {
      results.push([...results[j], nums[i]]);
    }
    
    if (nums[i + 1] === nums[i]) {
      index = length;
    } else {
      index = 0;
    }
  }
  
  return results;
};

