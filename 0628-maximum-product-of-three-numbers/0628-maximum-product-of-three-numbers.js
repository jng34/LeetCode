/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function(nums) {

    let min1 = Infinity, min2 = Infinity, max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    
    for (let n of nums) {
        if (n <= min1) {
            [min2, min1] = [min1, n];
            // min2 = min1;
            // min1 = n;
        } else if (n <= min2) {
            min2 = n;
        }
        
        if (n >= max1) {
            [max3, max2, max1] = [max2, max1, n]; 
            // max3 = max2;
            // max2 = max1;
            // max1 = n;
        } else if (n >= max2) {
            [max3, max2] = [max2, n];
            // max3 = max2;
            // max2 = n;
        } else if (n >= max3) {
            max3 = n;
        }
    }

    return Math.max(min1*min2*max1,  max1*max2*max3);
};


// var maximumProduct = function(nums) {

//     let sortNums = nums.sort((a,b) => a-b);
//     let len = nums.length;
    
//     return Math.max(
//         sortNums[len-1]*sortNums[len-2]*sortNums[len-3], 
//         sortNums[0]*sortNums[1]*sortNums[len-1]
//     );
// };