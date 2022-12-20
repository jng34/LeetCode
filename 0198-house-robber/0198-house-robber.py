class Solution:
    def rob(self, nums: List[int]) -> int:
      
      def _rob(nums, i, memo):  
        if i in memo:
          return memo[i]
        if i >= len(nums):
          return 0
        include_first = nums[i] + _rob(nums, i+2, memo)
        exclude_first = _rob(nums, i+1, memo)
        memo[i] = max(include_first, exclude_first)
        return memo[i]
    
      return _rob(nums, 0, {})