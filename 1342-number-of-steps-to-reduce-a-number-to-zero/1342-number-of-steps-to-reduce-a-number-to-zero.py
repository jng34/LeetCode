class Solution:
    def numberOfSteps(self, num: int, steps = 0) -> int:
        if num == 0:
            return steps
        num -= 1 if num % 2 > 0 else num/2
        return self.numberOfSteps(num, steps + 1)