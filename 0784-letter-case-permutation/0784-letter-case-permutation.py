class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        result = []
        self.helper(0, s, '', result)
        return result
    
    def helper(self, i, str, input, output):
        # Base case
        if i == len(str):
            output.append(input)
            return
        
        if str[i].isalpha():
            # if it's a letter
            self.helper(i + 1, str, input + str[i].upper(), output)
            self.helper(i + 1, str, input + str[i].lower(), output)
        else:
            # if it's a digit    
            self.helper(i + 1, str, input + str[i], output)
        
        return