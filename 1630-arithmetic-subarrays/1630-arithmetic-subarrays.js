/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res = [];
    const m = l.length;
    
    for (let i = 0; i < m; i++) {
        let subArr = nums.slice(l[i], r[i] + 1);
        let isSeq = true;
        subArr.sort((a,b) => a-b);
        for (let j = 1; j < subArr.length; j++) {
            if (subArr[j] - subArr[j-1] !== subArr[1] - subArr[0]) {
                isSeq = false;
                res.push(isSeq);
                break;
            }
        }
        if (isSeq) res.push(true);
    }
    
    return res;
};