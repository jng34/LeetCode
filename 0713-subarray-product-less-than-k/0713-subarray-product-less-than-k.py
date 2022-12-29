class Solution(object):
    def numSubarrayProductLessThanK(self, nums, k):
        if k <= 1:
          return 0
        count = left = right = 0
        product = 1
        
        while right < len(nums):
          product *= nums[right]
          while product >= k:
            product /= nums[left]
            left += 1
          count += right - left + 1
          right += 1
        
        return count
        