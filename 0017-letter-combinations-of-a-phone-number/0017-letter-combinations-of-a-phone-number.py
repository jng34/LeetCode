class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
      if digits == "":
        return []
      
      keys = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
      }
      
      combos = [*keys[digits[0]]]
      i = 1
      
      while i < len(digits):
        temp = []
        letters = keys[digits[i]]
        for char in combos:
          for letter in letters:
            temp.append(char + letter)
        
        combos = temp
        i += 1
      
      return combos