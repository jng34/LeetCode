/**
 * @param {number[]} nums
 * @param {number} kd
 * @return {number}
 */
var countGood = function (nums, k) {
  // Track frequency of n occurrences.
  const freq = {};
  let numOfPairs = 0;
  let goodSubArrs = 0;

  // Sliding window technique:
  // Iterate through nums by sliding r pointer up, tracking freq and numOfPairs
  // numOfPairs = running sum of previous occurrences
  // When numOfPairs is at least k, then slide l pointer up
  // While l < r and numOfPairs >= k:
  //  increment goodSubArrs by n-r
  //  decrement freq count of nums[l] by 1
  //  decrement numOfPairs by remaining pairs
  //  increment l by 1.
  
  let l = 0, r = 0, n = nums.length;

  while (r < n) {
    const el = nums[r];
    if (freq[el]) numOfPairs += freq[el];
    freq[el] = (freq[el] || 0) + 1;

    while (l < r && numOfPairs >= k) {
      const currEl = nums[l];
      goodSubArrs += n - r;
      freq[currEl]--;
      numOfPairs -= freq[currEl];
      l++;
    }

    r++;
  }

  return goodSubArrs;
}