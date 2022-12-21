class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curr_max = nums[0]
        total = nums[0]
        for i in range(1, len(nums)):
          curr_max = max(curr_max + nums[i], nums[i])
          total = max(total, curr_max)
        return total