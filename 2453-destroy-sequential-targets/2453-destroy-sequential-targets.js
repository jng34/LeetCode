/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
    nums.sort((a,b) => a-b);
    
    const tracker = {};
    for (let n of nums) {
        const rem = n % space;
        if (!(rem in tracker)) {
            tracker[rem] = 0;
        }
        tracker[rem]++;
    };
    
    console.log(tracker)
    
    let minVal;
    let maxTargets = 0;

    for (let n of nums) {
        const rem = n % space;
        if (tracker[rem] > maxTargets) {
            maxTargets = tracker[rem];
            minVal = n;
        }
    };
    
    return minVal;    
};