/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0, currMax;
    while (left < right) {
        if (height[left] <= height[right]) {
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