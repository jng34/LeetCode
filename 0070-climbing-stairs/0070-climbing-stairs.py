class Solution:
    def climbStairs(self, n: int) -> int:
      if n == 1:
        return 1
      one, two = 1, 2
      for _ in range(2,n):
        curr = two
        two = one + two
        one = curr
      return two
        
   
      
