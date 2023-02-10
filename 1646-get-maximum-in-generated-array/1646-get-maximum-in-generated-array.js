/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    // Base case
    if (n === 0) return 0;
    
    let nums = new Array(n + 1);
    nums[0] = 0;
    nums[1] = 1;
    let i = 1;
    let m = n % 2 === 0 ? n/2 : (n - 1)/2
    while (i <= m) {
        nums[2 * i] = nums[i];
        if (2 * i + 1 <= n) {
            nums[2 * i + 1] = nums[i] + nums[i + 1];
        }
        i++;
    }
    return Math.max(...nums);
};