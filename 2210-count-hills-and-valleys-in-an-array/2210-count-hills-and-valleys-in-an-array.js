/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    // iterate through nums and check for hill and valley
    // start at i=1 and end at i=nums.length-1
    // keep track of prev val - skip curr num if curr == prev
    // update prev
    
    let count = 0;
    let prev = nums[0];
    
    for (let i=1; i<nums.length-1; i++) {
        const curr = nums[i];
        // skip duplicate
        if (prev === curr) continue; 
        
        // check for non-equal neighbors
        let l=i-1, r=i+1;
        while (nums[l] === curr) l--;
        while (nums[r] === curr) r++;
        
        if (l >= 0 && r < nums.length) {
            // check if it's a hill
            if (nums[l] < curr && nums[r] < curr) {
                count++;
            }

            // check if it's a valley
            if (nums[l] > curr && nums[r] > curr) {
                count++;
            }
            
            prev = curr;
        }
    }
    
    return count;
};