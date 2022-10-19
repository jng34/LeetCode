/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Return nums if there is only one element
    if (nums.length === 1) return nums;
    
    // Create a nonZeroIndex pointer to sort non zero integers in the beginning.
    // Iterate through nums array

    
    let nonZeroIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
      
      if (nums[i] !== 0) {
        
        nums[nonZeroIndex] = nums[i];
        
        if (nonZeroIndex === i) {
          nums[i] = nums[i];
        } else {
          nums[i] = 0;
        }
        
        nonZeroIndex++;
      
      }
    }

};



// [0,1,0,3,12,4]
// [1,0,3,12,4,0]
// [1,0,3,12,4,0]