/**
 * @param {number[]} height
 * @return {number}
 */

/*
    [5,8,50,50,8,4,7,5]
     0 1 2 3 4 5 6 7   

*/
var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0, currMax;
    
    while (left < right) {
        currMax = (right - left) * Math.min(height[left], height[right]);
        height[left] < height[right] ? left++ : right--;
        max = Math.max(max, currMax);
    }
    return max;
};