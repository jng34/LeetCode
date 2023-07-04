/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            if (board[r][c] === '.') continue;
            findBattleships(r, c);
            count++;
        }
    }
    return count;
    
    
    function findBattleships(row, col) {
        const boundaryCheck = row < 0 || row >= board.length || col < 0 || col >= board[0].length;
        if (boundaryCheck) return null;
        if (board[row][col] === '.') return null;
        board[row][col] = '.';
        findBattleships(row, col + 1);  //check vertically
        findBattleships(row + 1, col);  //check horizontally
    }
};


