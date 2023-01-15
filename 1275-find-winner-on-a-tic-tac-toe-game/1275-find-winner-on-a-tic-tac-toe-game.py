class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        rows = [0,0,0]
        cols = [0,0,0]
        count = main_diag = anti_diag = 0
        
        for move in moves:
            r, c = move
            # 1 represents 'X' and -1 represents 'O'
            value = 1 if count % 2 == 0 else -1
            rows[r] += value
            cols[c] += value
            
            if r == c:
                main_diag += value
            if r + c == 2:
                anti_diag += value
            
            # Check for winner
            if 3 in [rows[r], cols[c], main_diag, anti_diag]:
                return 'A'
            elif -3 in [rows[r], cols[c], main_diag, anti_diag]:
                return 'B'
            
            count += 1
            print(rows)
            print(cols)
        if count < 9:
            return 'Pending'
        
        return 'Draw'
            