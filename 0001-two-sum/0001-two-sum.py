class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i in range(len(nums)):
          diff = target - nums[i]
          if diff in seen:
            return [seen[diff], i]
          else:
            seen[nums[i]] = i