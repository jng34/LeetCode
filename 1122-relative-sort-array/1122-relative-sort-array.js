/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let ans = [];
    for (let i = 0; i < arr2.length; i++) {
        const n = arr2[i];
        for (let j = 0; j < arr1.length; j++) {
            const m = arr1[j];
            if (m === n) {
                ans.push(m);
                arr1[j] = -1;
            }
        }
    }
    
    arr1.sort((a,b) => a-b);
    
    for (let n of arr1) {
        if (n !== -1) ans.push(n);
    }
    
    return ans;
};