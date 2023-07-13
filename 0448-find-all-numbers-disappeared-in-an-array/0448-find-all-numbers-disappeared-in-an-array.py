class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        res = []
        numSet = set()
        for n in nums:
            numSet.add(n)
        for i in range(1, len(nums)+1):
            if i not in numSet:
                res.append(i)
        return res