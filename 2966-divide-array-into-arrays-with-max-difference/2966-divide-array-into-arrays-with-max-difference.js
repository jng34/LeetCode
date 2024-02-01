/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  // create ans array
  let ans = [];

  // sort nums in ascending order to 
  // minimize difference between elements
  nums.sort((a, b) => a - b);

  // array to store groups of 3 elements
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);
    if (temp.length === 3) {
      // check if diff between any two elements
      const [a, b, c] = temp;
      if (c - b > k || c - a > k || b - a > k) return [];

      // add temp to ans;
      ans.push(temp);

      // reset temp
      temp = [];
    }
  }

  return ans;
};