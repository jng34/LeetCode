class Solution:
    def longestValidParentheses(self, s: str) -> int:
        left_brackets = 0
        right_brackets = 0
        longest = 0
        
        # Check from left to right
        for i in range(len(s)):
          if s[i] == '(':
            left_brackets += 1
          else:
            right_brackets += 1
            
          if left_brackets == right_brackets:
            if right_brackets * 2 > longest:
              longest = right_brackets * 2
          
          if right_brackets > left_brackets:
            left_brackets = 0
            right_brackets = 0
        
        
        # Check from right to left
        left_brackets = 0
        right_brackets = 0
        for i in reversed(range(len(s))):
          if s[i] == '(':
            left_brackets += 1
          else:
            right_brackets += 1
            
          if left_brackets == right_brackets:
            if left_brackets * 2 > longest:
              longest = left_brackets * 2
          
          if left_brackets > right_brackets:
            left_brackets = 0
            right_brackets = 0
            
        return longest
            