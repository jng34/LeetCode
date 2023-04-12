/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [];
  nums.sort((a,b) => a-b);
  backtrack(0, [], nums, res);
  return res;
};

function backtrack(index, path, nums, res) {
  res.push([...path])
  
  for (let i=index; i<nums.length; i++) {
    if (i > index && nums[i] === nums[i-1]) continue;
    path.push(nums[i]);
    backtrack(i+1, path, nums, res);
    path.pop();
  }
}