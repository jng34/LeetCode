/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);
    let intersection = [];
    for (let n of [...num2Set]) {
        if (num1Set.has(n)) intersection.push(n);
    }    
    return intersection;
}