class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:    
        nums = list(range(1, n+1))
        print(nums)
        return self.helper(nums, k)
      
    def helper(self, arr, num):
        # Base cases
        if len(arr) < num:
          return []
        if num == 0:
          return [[]]

        first = arr[0]
        combos1 = self.helper(arr[1:], num - 1)
        combos_with_target = []
        for combo in combos1:
          combos_with_target.append([first, *combo])

        combos2 = self.helper(arr[1:], num)

        return combos_with_target + combos2