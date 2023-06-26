/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    // [-12,2,3,3,5,1,4]
    //  m
    
    let firstMax = -Infinity;    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > firstMax) firstMax = nums[i]; 
    }
    
    let secondMax = -Infinity;    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > secondMax && nums[i] < firstMax) secondMax = nums[i]; 
    }

    let thirdMax = -Infinity;    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > thirdMax && nums[i] < secondMax) thirdMax = nums[i]; 
    }
    
    // console.log('first max, ' + firstMax)
    // console.log('sec max, ' + secondMax)
    // console.log('third max, ' + thirdMax)
    
    if (secondMax === -Infinity || thirdMax === -Infinity) return firstMax;
    
    return thirdMax;
};