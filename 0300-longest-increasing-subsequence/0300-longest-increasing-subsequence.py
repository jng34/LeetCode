class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        subseq = [ nums[0] ]
        for i in range(1, len(nums)):
          curr = nums[i]
          prev = subseq[-1]
          if curr > prev:
            subseq.append(curr)
          else:
            j = 0
            while curr > subseq[j]:
              j += 1
            subseq[j] = curr
        return len(subseq)