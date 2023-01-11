class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
      if len(nums) == 1:
        return nums
      
      left, right = 0, len(nums) - 1
      
      while left < right:
        # if left is odd and right is even, swap values
        if nums[left] % 2 > nums[right] % 2:
          nums[left], nums[right] = nums[right], nums[left]
        # if left is even, increment left
        # if right is odd, decrement right
        if nums[left] % 2 == 0:
          left += 1
        if nums[right] % 2 != 0:
          right -= 1
      
      return nums