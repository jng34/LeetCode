class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(1, len(prices)):
            prev = prices[i-1]
            curr = prices[i]
            if curr > prev:
                profit += curr - prev
        return profit