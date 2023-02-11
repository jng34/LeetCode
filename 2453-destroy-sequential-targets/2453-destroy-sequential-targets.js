/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
    const tracker = {};
    for (let n of nums) {
        const rem = n % space;
        if (!(rem in tracker)) {
            tracker[rem] = 0;
        }
        tracker[rem]++;
    };
    let maxTargets = Math.max(...Object.values(tracker));
    
    let minVal = Infinity;
    for (let n of nums) {
        const rem = n % space;
        if (tracker[rem] === maxTargets && n < minVal) {
            minVal = n;
        }
    };
    
    return minVal;    
};