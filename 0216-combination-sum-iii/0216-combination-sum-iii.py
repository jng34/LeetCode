class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        results = []
        nums = [n for n in range(1, 10)]
        def searchCombo(index, path, target, num):
            if target < 0:
                return
            if target == 0 and num == 0:
                return results.append(path[:])
            for i in range(index, len(nums)):
                # path.append(nums[i])
                searchCombo(i + 1, [*path, nums[i]], target - nums[i], num - 1)
                # path.pop()
        
        searchCombo(0, [], n, k)
        return results