class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
      if n == 1: 
        return ['()']
      res = []
      self.helper(n, n, '', res)
      return res
  
    def helper(self, open, close, str, result):
      if close < open:
        return
      if open == 0 and close == 0:
        result.append(str)
        return
    
      if open > 0:
        self.helper(open - 1, close, f'{str}(', result)
        
      if close > 0:
        self.helper(open, close - 1, f'{str})', result)