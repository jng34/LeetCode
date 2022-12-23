class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        prev_max = nums[0]
        prev_min = nums[0]
        max_prod = nums[0]
      
        i = 1
        while i < len(nums):
          curr_min = min(prev_min*nums[i], prev_max*nums[i], nums[i])
          curr_max = max(prev_min*nums[i], prev_max*nums[i], nums[i])
          prev_min = curr_min
          prev_max = curr_max
          max_prod = max(max_prod, prev_max)
          i += 1
        
        return max_prod