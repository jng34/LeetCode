class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        freq = {}
        for n in nums:
            if n in freq:
                freq[n] += 1
                if freq[n] == 2:
                    return True
            else:
                freq[n] = 1
        return False