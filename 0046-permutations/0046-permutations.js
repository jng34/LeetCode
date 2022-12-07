/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Time & Space: O(n!)

var permute = function(nums) {
  if (nums.length === 0) return [[]];
  
  const first = nums[0];
  const perms = permute(nums.slice(1));
  const fullPerms = [];
  
  for (let perm of perms) {
    for (let i=0; i <= perm.length; i++) {
      fullPerms.push([...perm.slice(0,i), first, ...perm.slice(i)]);
    }
  }
  
  return fullPerms;
};