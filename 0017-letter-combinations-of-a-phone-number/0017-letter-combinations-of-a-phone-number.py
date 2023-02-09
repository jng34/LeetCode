class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
      if digits == "":
        return []
      
      keys = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
      }
      
      res = []
      self.backTrack(keys, digits, 0, '', res)
      return res
    
    
    def backTrack(self, keys, nums, index, path, result):
      if index == len(nums):
        result.append(path)
        return
      
      letters = keys[nums[index]]
      for l in letters:
        self.backTrack(keys, nums, index + 1, path + l, result)