class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        if n < 0:
            return self.myPow(1/x, n*-1)
        if n % 2 == 0:
            return self.myPow(x*x, n/2)
        return self.myPow(x*x, (n-1)/2)*x
        