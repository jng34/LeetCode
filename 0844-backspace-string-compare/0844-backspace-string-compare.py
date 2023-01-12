class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
      return self.parse_str(s) == self.parse_str(t)
    
    def parse_str(self, string: str):
      i, stack = 0, []
      while i < len(string):
        if string[i] != '#':
          stack.append(string[i])
        else:
          if len(stack) > 0:
            stack.pop()
        i += 1
      return ''.join(stack)
      