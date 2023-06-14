/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 1) return [String(nums[0])];
    
    let res = [];
    let start = nums[0];
    let end = nums[0];
    
    // [0, 2, 3, 4, 6, 8, 9]
    // start = 8
    // end = 8
    // res = ['0', '4->6', '6',]
    
    for (let i=1; i<nums.length; i++) {
        if (nums[i] === nums[i-1] + 1) {
            end++;
        } else {
            if (start === end) {
                res.push(String(end));
            } else {
                res.push(start + '->' + end);
            }
            start = nums[i];
            end = nums[i];
        }
        
        // handle last element
        if (i+1 === nums.length) {
            if (start === end) {
                res.push(String(end));
            } else {
                res.push(start + '->' + end);
            }
        }    
    }   
    return res;
};