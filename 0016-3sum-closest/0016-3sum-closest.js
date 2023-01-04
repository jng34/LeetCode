/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
    [-4, -1, 1, 2]
      i     
          j     
                k
    target = 1
    sums = -3, -18, -21
*/

var threeSumClosest = function(nums, target) {
    let closest = Infinity, closestSum, diff;
    nums.sort((a,b) => a-b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i+1, k = nums.length-1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            diff = Math.abs(target - sum);
            if (diff < closest) {
                closest = diff;
                closestSum = sum;
            } 
            sum > target ? k-- : j++;
        }
    }
    return closestSum;
};