class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      if len(s) == 0:
        return 0
      
      longest = 1
      stack = [ s[0] ]
      i = 1
      
      while i < len(s):
        if s[i] in stack:
          #Find index of repeated character
          idx = stack.index(s[i])
          stack = stack[idx+1:]
          stack.append(s[i])
        else:
          stack.append(s[i])
          
        longest = max(longest, len(stack))
        i += 1
        
      return longest