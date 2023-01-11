class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
      # Square each element
      for i in range(len(nums)):
        nums[i] = nums[i]**2
        
      nums.sort()
      
      return nums
