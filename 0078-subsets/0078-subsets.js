/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, i = 0) {
  if (i === nums.length) return [[]];

  const first = nums[i];
  const subsetsWithoutFirst = subsets(nums, i + 1);
  const subsetsWithFirst = subsetsWithoutFirst.map((sub) => [first, ...sub]);

  return [...subsetsWithoutFirst, ...subsetsWithFirst];
};