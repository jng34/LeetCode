class Solution:
    def subsets(self, nums):
      if len(nums) == 0:
        return [[]]
      
      first = nums[0]
      sets_without_first = self.subsets(nums[1:])
      sets_with_first = []
      for combo in sets_without_first:
        sets_with_first.append([ first, *combo ])
      
      return sets_with_first + sets_without_first
        