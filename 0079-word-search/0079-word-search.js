/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // Define searchWord fn to look for a match
    const searchWord = (r, c, index, visited) => {
        const rowInbound = r >= 0 && r < board.length;
        const colInbound = c >= 0 && c < board[0].length;
        if (!rowInbound || !colInbound || board[r][c] !== word[index]) return false;

        if (index === word.length - 1) return true;
        
        board[r][c] = "_";
        
        // use BFS - 4 directions
        const up = searchWord(r + 1, c, index + 1, visited);
        const down =searchWord(r - 1, c, index + 1, visited);
        const right = searchWord(r, c + 1, index + 1, visited);
        const left = searchWord(r, c - 1, index + 1, visited);
        
        board[r][c] = word[index];
        
        return up || down || right || left;
    }
    
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                if (searchWord(row, col, 0)) {
                    return true;
                }
            }
        }
    }
    
    return false;
};