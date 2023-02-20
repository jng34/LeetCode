class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:

      def findCombos(target, memo):
        if target in memo:
          return memo[target]
        if target < 0: 
          return 0
        if target == 0:
          return 1
        
        count = 0
        for num in nums:
          if num <= target:
            diff = target - num
            count += findCombos(diff, memo)
        memo[target] = count
        return memo[target]
        
      return findCombos(target, {})
