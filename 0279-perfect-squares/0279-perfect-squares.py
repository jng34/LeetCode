class Solution:
    def numSquares(self, n: int) -> int:
      
      def _numSquares(n, memo):
        if n in memo:
          return memo[n]
        if n == 0:
          return 0

        min_count = float('inf')
        for i in range(1, math.floor(math.sqrt(n)) + 1):
          square = i * i
          min_count = min( min_count, 1 + _numSquares(n - square, memo))

        memo[n] = min_count
        return memo[n]
      
      
      return _numSquares(n, {})