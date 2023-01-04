/**
 * @param {number[]} nums
 * @return {number[][]}  

/*
    [-4, -1, -1, -1, 0, 1, 2, 2]
          i
                        k
                  j
    res = [[-1, 1, 2], []]
*/
var threeSum = function(nums) {
    const result = [];
    nums.sort((a,b) => a-b);
    let target = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]])
                
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
}


// var threeSum = function(nums) {
//   if (nums.length >= 3 && nums.every(x => x == 0)) return [[0,0,0]];
    
//   nums.sort((a,b) => a-b)
//   let used = new Set();  
//   let result = [];
//   for (let i=0; i<nums.length; i++) {
//     if (used.has(nums[i])) continue;
//     let target = 0 - nums[i];
//     let solutions = twoSum(nums, target, i+1);
//     // console.log(solutions)
//     for (let sol of solutions) {
//       sol.push(nums[i]);
//       result.push(sol);
//     }
//      used.add(nums[i])
//   }
//   // console.log(result)
//   return result;
// };


// var twoSum = function(nums, target, index) {
//   let seen = {}
//   let solution = [];
//   for (let j=index; j<nums.length; j++) {
//     let diff = target - nums[j];
//     if (diff in seen) {
//       solution.push([nums[seen[diff]], nums[j]]);
//     } else {
//       seen[nums[j]] = j;
//     }
//   }
//   return solution;
// }
