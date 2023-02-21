class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
      # Bottom Up approach - Tabulation
      pascals = [[0]*(i+1) for i in range(rowIndex+1)]
      
      # Each row has a 1 in the beginning and end
      for i in range(len(pascals)):
        pascals[i][0] = pascals[i][-1] = 1
     
      for r in range(2, len(pascals)):        
        for c in range(1, r):
          prev = pascals[r-1]
          pascals[r][c] = prev[c-1] + prev[c]
      
      return pascals[rowIndex]
      