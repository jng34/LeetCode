class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
      freq = {0: -1}
      curr_sum = 0
      
      for i in range(len(nums)):
        curr_sum += nums[i]
        if k != 0:
          curr_sum %= k
        if curr_sum in freq:
          if i - freq[curr_sum] > 1:
            return True
        else:
          freq[curr_sum] = i
      
      return False