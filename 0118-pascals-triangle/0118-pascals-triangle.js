/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]];
    if (numRows === 1) return res;
    res.push([1,1]);
    if (numRows === 2) return res;
    
    for (let i = 2; i < numRows; i++) {
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length-1] = 1;
        for (let j = 1; j < row.length - 1; j++) {
            const prev = res[i-1];
            row[j] = prev[j-1] + prev[j];
        }
        res.push(row);
    }
    
    return res;
};