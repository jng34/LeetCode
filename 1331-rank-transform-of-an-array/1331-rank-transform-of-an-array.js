/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let tempArr = [...arr].sort((a,b) => a-b);
    const rankings = {};
    
    // assign rank to each number, in ascending order
    let rank = 1;
    
    for (let i = 0; i < tempArr.length; i++) {
        const n = tempArr[i];
        if (!rankings[n]) {
            rankings[n] = rank;
            rank++;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        arr[i] = rankings[n];
    }
    
    return arr;
};