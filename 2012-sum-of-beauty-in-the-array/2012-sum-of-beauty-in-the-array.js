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
    let minLatter = [];
    minLatter[n-1] = nums[n-1];
    
    // Fill array of min vals from the right of each elem
    for (let i=n-2; i>1; i--) {
        minLatter[i] = Math.min(minLatter[i+1], nums[i]);
    }
    
    let maxPrev = nums[0];
    for (let i=1; i<n-1; i++) {
        const curr = nums[i];
        if (curr > maxPrev && curr < minLatter[i+1]) {
            sum+=2;
        } else if (curr > nums[i-1] && curr < nums[i+1]) {
            sum+=1;
        } 
        maxPrev = Math.max(maxPrev, nums[i]);
    }
    
    return sum;
};