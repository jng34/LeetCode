/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    let visited = new Set();
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            // helper fn to find battleship
            if (findBattleships(r, c)) count++;
        }
    }
    return count;
    
    // Helper
    function findBattleships(row, col) {
        const boundaryCheck = row < 0 || row >= board.length || col < 0 || col >= board[0].length;
        if (boundaryCheck) return false;
        if (board[row][col] === '.') return false;
        
        const point = row + ',' + col;
        if (visited.has(point)) return false;
        visited.add(point);
        
        findBattleships(row, col + 1);  //check vertically
        findBattleships(row + 1, col);  //check horizontally
        
        return true;
    }
};


