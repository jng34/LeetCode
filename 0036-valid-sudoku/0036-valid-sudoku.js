/**
 * @param {character[][]} board
 * @return {boolean}
 */

// var isValidSudoku = function(board) {
  
//   for (let r = 0; r < board.length; r++) {
    
//     let row = new Set();
//     let col = new Set();
//     let subSq = new Set();
    
//     for (let c = 0; c < board.length; c++) {
      
//       let sqKey = Math.floor(r/3) + "," + Math.floor(c/3);
      
//       if (board[r][c] !== ".") {
        
//         if (row.has(board[r][c]) {
//           return false;    
//         }
//         row.add(board[r][c]);
        
//         if (col.has(board[c][r]) {
//           return false;    
//         }
//         col.add(board[c][r]);
        
//         if (subSq.has(board[r][c]) {
//           return false;    
//         }
//         subSq.add(board[r][c]);
        
//       }
//     }
    
//   }
  
//   return true;
    
// };

// Using object

var isValidSudoku = function(board) {
  
  let subSq = {};
  
  for (let r = 0; r < 9; r++) {
    
    let row = {};
    let col = {};

    for (let c = 0; c < 9; c++) {

        // let sqKey = Math.floor(r/3) + "," + Math.floor(c/3);

          if (board[r][c] !== ".") {
            if (board[r][c] in row) return false;
            row[board[r][c]] = true;
          }

          if (board[c][r] !== ".") {
            if (board[c][r] in col) return false;
            col[board[c][r]] = true;
          }

        
      let sqKey = Math.floor(r/3) + "," + Math.floor(c/3);
      let point = r + "," + c;
      let squareInfo = "val " + board[r][c] + ", region " + sqKey;
        
          if (board[r][c] !== ".") {

            if (Object.values(subSq).find(val => val === squareInfo)) return false;
            // subSq[board[r][c]] = sqKey; 
            // subSq[sqKey] = board[r][c]; 
            subSq[point] = squareInfo; 

          }

    }
    
  }
  
  return true;
    
};