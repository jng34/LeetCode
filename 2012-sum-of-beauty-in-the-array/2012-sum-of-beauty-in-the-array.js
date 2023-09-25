/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    /*
    initialize a var called sum
    for num of nums
        check for beauty of elem - 3 conditions:
           if curr elem > all prev elems AND curr elem < all following elems
                sum += 2
           else if curr elem > prev elem AND curr elem < next elem
                sum += 1
           else 
                sum += 0 (continue)
    return sum
    */
    
    const n = nums.length;
    let sum = 0;
    let maxPrev = [];
    maxPrev[0] = nums[0];
    let minLatter = [];
    minLatter[n-1] = nums[n-1];
    
    // Fill array of max vals from the left of each elem
    for (let i=1; i<n-1; i++) {
        maxPrev[i] = Math.max(maxPrev[i-1], nums[i]);
    }
    
    // Fill array of min vals from the right of each elem
    for (let i=n-2; i>1; i--) {
        minLatter[i] = Math.min(nums[i], minLatter[i+1]);
    }
    
    for (let i=1; i<n-1; i++) {
        const curr = nums[i];
        if (curr > maxPrev[i-1] && curr < minLatter[i+1]) {
            sum+=2;
        } else if (curr > nums[i-1] && curr < nums[i+1]) {
            sum+=1;
        } 
    }
    
    return sum;
};