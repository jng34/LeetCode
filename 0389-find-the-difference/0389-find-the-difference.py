class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        dict = {}
        for letter in t:
            if not letter in dict:
                dict[letter] = 1
            else:
                dict[letter] += 1
        
        for letter in s:
            dict[letter] -= 1
        
        for key in dict:
            if dict[key] == 1:
                return key
        