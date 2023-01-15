/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let grid = Array(3).fill('').map(()=>Array(3).fill(''));
    let aTurn = true;
    for (let move of moves) {
        const [x, y] = move;
        if (aTurn) {
            grid[x][y] = 'X';
        } else {
            grid[x][y] = 'O';
        }
        aTurn = !aTurn;
    }   
    console.log(grid)
    return winnerCheck(grid);
};

var winnerCheck = function(grid) {    
    //Check for winner in all rows
    for (let row of grid) {
        if (row.every(val => val === 'X')) {
            return "A"
        }
        if (row.every(val => val === 'O')) {
            return "B"
        }
    }
    //Check for winner in all columns
    for (let i=0; i<grid.length; i++) {
        let xCount = 0, oCount = 0;
        for (let j=0; j<grid.length; j++) {
            if (grid[j][i] === 'X') {
                xCount++;
            } else if (grid[j][i] === 'O') {
                oCount++;
            }
        }
        if (xCount === 3) return 'A';
        if (oCount === 3) return 'B';
    }
    //Check for winner in diagonal1
    let xCounter = 0, oCounter = 0;
    for (let k=0; k<grid.length; k++) {
        if (grid[k][k] === 'X') {
            xCounter++;
        } else if (grid[k][k] === 'O') {
            oCounter++;
        }
        if (xCounter === 3) return 'A';
        if (oCounter === 3) return 'B';
    }
    
    //Check for winner in diagonal2
    xCounter = 0, oCounter = 0;
    for (let k=0; k<grid.length; k++) {
        if (grid[k][grid.length-1-k] === 'X') {
            xCounter++;
        } else if (grid[k][grid.length-1-k] === 'O') {
            oCounter++;
        }
        if (xCounter === 3) return 'A';
        if (oCounter === 3) return 'B';
    }    
    
    //Check for empty spaces for more movements
    for (let m=0; m<grid.length; m++) {
        for (let n=0; n<grid.length; n++) {
            if (grid[m][n] === '') return 'Pending';
        }
    }
    
    return 'Draw';
}





