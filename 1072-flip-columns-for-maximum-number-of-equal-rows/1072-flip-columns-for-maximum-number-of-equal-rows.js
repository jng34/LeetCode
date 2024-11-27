/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const numCols = matrix[0].length;
    let maxRows = 0;
    
    for (let currRow of matrix) {
        // Create flipped row
        const flippedRow = [];
        let identicalRowCt = 0;
        
        for (let el of currRow) {
            flippedRow.push(1 - el);
        }
        
        // Iterate through all rows in matrix again 
        // and compare each to currRow and flippedRow
        for (let compareRow of matrix) {
            // compareRow <-> currRow 
            let same = true;
            for (let i=0; i<numCols; i++) {
                if (currRow[i] !== compareRow[i]) {
                    same = false;
                    break;
                }
            } 
            
            // compareRow <-> flippedRow
            let opp = true;
            for (let i=0; i<numCols; i++) {
                if (flippedRow[i] !== compareRow[i]) {
                    opp = false;
                    break;
                } 
            }
            if (same || opp) identicalRowCt++;
        }
        
        // update maxIdenticalRows
        maxRows = Math.max(maxRows, identicalRowCt);
    }
    
    return maxRows;
};