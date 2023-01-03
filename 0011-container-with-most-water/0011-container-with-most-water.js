/**
 * @param {number[]} height
 * @return {number}
 */

/*
    [5,8,6,2,5,4,7,5]
     0 1 2 3 4 5 6 7   

*/
var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0, currMax;
    while (left < right) {
        if (height[left] < height[right]) {
            currMax = (right - left) * height[left];
            left++;
        } else {
            currMax = (right - left) * height[right];
            right--;
        }
        max = Math.max(max, currMax);
    }
    return max;
};