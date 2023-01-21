class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 0:
            return [[]]
        
        first = nums[0]
        perms = self.permute(nums[1:])
        all_perms = []
        
        for perm in perms:
            for i in range(len(perm) + 1):
                all_perms.append(perm[:i] + [first] + perm[i:])
        
        return all_perms