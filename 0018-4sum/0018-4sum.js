/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const n = nums.length;
  nums.sort((a,b) => a-b);

  function kSum(start, target, k) {
      let res = [];
      if (start === nums.length || target/k < nums[0] || target/k > nums[n-1]) return res;
      if (k === 2) return twoSum(start, target);
    
      for (let i=start; i<n; i++) {
          // if (nums[i-1] && nums[i] === nums[i-1]) continue;
          if (i === start || nums[i-1] !== nums[i]) {
            const subSets = kSum(i+1, target-nums[i], k-1);
            for (let set of subSets) {
              set.push(nums[i]);
              res.push(set);
            }  
          }
      }
      return res;
  }

  function twoSum(start, target) {
    let res = [];
    let l=start, r=nums.length-1;
    while (l<r) {
        const sum = nums[l]+nums[r];
        if (sum < target || (l > start && nums[l] === nums[l-1])) {
            l++;
        } else if (sum > target || (r < nums.length-1 && nums[r] === nums[r+1])) {
            r--;
        } else {
            res.push([nums[l], nums[r]]);
            l++;
            r--;
        }
    }
    return res;
  };

  return kSum(0, target, 4);
};

