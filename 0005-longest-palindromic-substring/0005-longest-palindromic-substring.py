class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ''
        resLength = 0
        
        for i in range(len(s)):
        
          # Odd lengths
          start, end = i, i
          while start >= 0 and end < len(s) and s[start] == s[end]:
            if end - start + 1 > resLength:
              res = s[start:end+1]
              resLength = end - start + 1
            start -= 1
            end += 1
          
          # Even lengths
          start, end = i, i + 1
          while start >= 0 and end < len(s) and s[start] == s[end] :
            if end - start + 1 > resLength:
              res = s[start:end+1]
              resLength = end - start + 1
            start -= 1
            end += 1
          
        return res
    

    
   