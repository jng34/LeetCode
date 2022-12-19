class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        i = 0
        j = len(s)-1
        
        while i < j:
          front = s[i]
          back = s[j]
          s[i] = back
          s[j] = front
          i += 1
          j -= 1