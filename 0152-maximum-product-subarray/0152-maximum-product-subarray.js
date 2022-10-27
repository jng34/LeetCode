/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
    let max = nums[0];
    let prevMin = nums[0];
    let prevMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let currMax = Math.max(nums[i], nums[i]*prevMax, nums[i]*prevMin);
        let currMin = Math.min(nums[i], nums[i]*prevMax, nums[i]*prevMin);
        
        prevMax = currMax;
        prevMin = currMin;
        
        max = Math.max(max, currMax);
    }
    
    return max;
    
}


// Memoization
// var maxProduct = function(nums, memo=new Map()) {
//     // Base case
//     if (nums.length === 1) return nums[0];
    
//     if (nums in memo) return memo[nums];
//     memo[nums];
//     let max = nums[0];
    
//     // Compare product of prev & curr elem with curr elem 
//     let path1 = maxProduct(nums.slice(1), memo) 
//     nums[1] = nums[0]*nums[1];
//     let path2 = maxProduct(nums.slice(1), memo) // -2 * 3 = -6
    
//     max = Math.max(max, path1, path2);
//     // console.log('max: ' + max)
//     // memo[nums] = max;
//     // console.log(memo)
//     return max;
    
// };