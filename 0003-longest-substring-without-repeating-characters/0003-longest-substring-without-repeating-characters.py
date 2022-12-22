class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
          return 0
        
        sub_str = s[0]
        longest = 1
        i = 1
  
        while i < len(s):
          if s[i] in sub_str:
            index = sub_str.index(s[i]) + 1
            sub_str = sub_str[index:] + s[i]
          else:
            sub_str += s[i]
            
          longest = max(longest, len(sub_str))
          i += 1
          
        return longest