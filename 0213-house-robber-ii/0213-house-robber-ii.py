class Solution:
    def rob(self, nums: List[int]) -> int:
      # Helper function 1
      def rob1(nums, i, memo):
        if i in memo:
          return memo[i]
        if i >= len(nums) - 1:
          return 0

        include = nums[i] + rob1(nums, i+2, memo)
        exclude = rob1(nums, i+1, memo)
        memo[i] = max(include, exclude)

        return memo[i]

      # Helper function 2
      def rob2(nums, j, memo):
        if j in memo:
          return memo[j]
        if j >= len(nums):
          return 0

        include = nums[j] + rob2(nums, j+2, memo)
        exclude = rob2(nums, j+1, memo)
        memo[j] = max(include, exclude)

        return memo[j]

      
      return max(nums[0], rob1(nums, 0, {}), rob2(nums, 1, {}))  
        
        
        
        
        
        