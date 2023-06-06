/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    // Find position of Rook
    let rookRow, rookCol;
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            if (board[r][c] === 'R') {
                rookRow = r;
                rookCol = c;
                break;
            }
        }
    }
    console.log(rookRow, rookCol)
    let captures = 0;
    
    // Check row for available captures
    // Check left of rook
    for (let i=rookCol-1; i>=0; i--) {
        if (board[rookRow][i] === 'p') {
            captures++;
            break;
        } else if (board[rookRow][i] === 'B') {
            break;
        } else {
            continue;
        }
    }    
         
    // Check right of rook
    for (let i=rookCol+1; i<board[rookRow].length; i++) {
        if (board[rookRow][i] === 'p') {
            captures++;
            break;
        } else if (board[rookRow][i] === 'B') {
            break;
        } else {
            continue;
        }
    }  
        
    // Check column for available captures
    // Check above of rook
    for (let i=rookRow-1; i>=0; i--) {
        if (board[i][rookCol] === 'p') {
            captures++;
            break;
        } else if (board[i][rookCol] === 'B') {
            break;
        } else {
            continue;
        }
    }  
    
    // Check below of rook
    for (let i=rookRow+1; i<board.length; i++) {
        if (board[i][rookCol] === 'p') {
            captures++;
            break;
        } else if (board[i][rookCol] === 'B') {
            break;
        } else {
            continue;
        }
    }  
    
    return captures;
};