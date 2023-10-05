/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let num1, num2, count1 = 0, count2 = 0;
    let res = [];
    for (let n of nums) {
        if (count1 === 0 && num2 !== n) {
            num1 = n;
            count1++;
        } else if (count2 === 0 && num1 !== n) {
            num2 = n;
            count2++;
        } else if (n === num1) {
            count1++;
        } else if (n === num2) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    
    count1 = 0; count2 = 0;
    for (let n of nums) {
        if (num1 === n) count1++;
        if (num2 === n) count2++;
    }
    
    if (count1 > nums.length/3) res.push(num1);
    if (count2 > nums.length/3) res.push(num2);
    
    return res;
};