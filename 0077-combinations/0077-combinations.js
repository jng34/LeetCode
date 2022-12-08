/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/*
  Iterate through range of nums [1, n] and store in array
  Apply recursion to find all possible combos
  Time: O(n!/[k!(n-k)!])
*/
var combine = function(n, k) {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  
  return findCombos(nums, k);
};


var findCombos = function(arr, num) {
  if (arr.length < num) return [];
  if (num === 0) return [[]];
  
  const first = arr[0];
  const combos1 = findCombos(arr.slice(1), num - 1);
  const allCombos = [];
  for (let combo of combos1) {
    allCombos.push([first, ...combo]);
  }
  
  const combos2 = findCombos(arr.slice(1), num);
  return [...allCombos, ...combos2];
}
