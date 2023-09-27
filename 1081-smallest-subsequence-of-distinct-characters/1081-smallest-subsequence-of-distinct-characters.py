class Solution:
    def smallestSubsequence(self, s: str) -> str:
        stack = []
        seen = set()
        last_indices = {c: i for i, c in enumerate(s)}
        
        for i, ch in enumerate(s):
            if ch not in seen:
                while stack and stack[-1] > ch and last_indices[stack[-1]] > i:
                    popped = stack.pop()
                    seen.remove(popped)
                stack.append(ch)
                seen.add(ch)
        
        return ''.join(stack)
        
    