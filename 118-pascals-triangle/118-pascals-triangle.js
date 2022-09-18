/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
  
*/

var generate = function(numRows) {
    //initialize array for pascals triangle
    let triangle = new Array(numRows);
    
    for (let i = 0; i < numRows; i++) {
        //builds row structure with 1 at start and end
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length - 1] = 1;
        
        //builds inside of row by summing up previous row elements
        for (let j = 1; j < row.length - 1; j++) {
            let prevRow = triangle[i-1];
            row[j] = prevRow[j] + prevRow[j-1];
        }
        //set row to pascals triangle
        triangle[i] = row;
    }
    return triangle;
};