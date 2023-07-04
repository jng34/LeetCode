/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            if (board[r][c] === 'X' 
                && board[r][c-1] !== 'X' 
                && (!board[r-1] || board[r-1][c] !== 'X')) {
                count++;
            }
        }
    }
    return count;
};


