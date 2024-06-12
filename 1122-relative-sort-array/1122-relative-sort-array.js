/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const freq = {};
    arr1.forEach((n) => freq[n] = (freq[n] || 0) + 1);
    
    let ans = [];
    for (let i = 0; i < arr2.length; i++) {
        const n = arr2[i];
        for (let j = freq[n]; j > 0; j--) {
            ans.push(n);
            freq[n]--;
        }
    }
    
    let temp = [];
    for (let n in freq) {
        if(freq[n]!==0){
            for (let j = freq[n]; j > 0; j--) {
                temp.push(n);                
            }
        }
    }
    temp.sort((a,b) => a-b); // ASC
    
    return [...ans, ...temp];
};