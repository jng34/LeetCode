/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freqMap = {};
  const bucket = [];
  const result = [];

  for(let num of nums) {
      freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for(let [num, freq] of Object.entries(freqMap)) {
      bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for(let i = bucket.length-1; i >= 0; i--) {
    if(bucket[i]) result.push(...bucket[i]);
    if(result.length === k) break;
  }
  
  return result;
};