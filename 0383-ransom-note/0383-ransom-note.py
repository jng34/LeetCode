class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        freq = {}
        for letter in magazine:
            if letter in freq:
                freq[letter] += 1
            else:
                freq[letter] = 1
        
        for letter in ransomNote:
            if letter not in freq:
                return False
            else:
                freq[letter] -= 1
                if freq[letter] < 0:
                    return False
        
        return True
        