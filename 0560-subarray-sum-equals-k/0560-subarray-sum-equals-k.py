class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
      freq = {0: 1}
      count = currSum = 0
      
      for i in range(len(nums)):
        currSum += nums[i]
        diff = currSum - k
        if diff in freq:
          count += freq[diff]
        if currSum in freq:
          freq[currSum] += 1
        else:
          freq[currSum] = 1
          
      return count  