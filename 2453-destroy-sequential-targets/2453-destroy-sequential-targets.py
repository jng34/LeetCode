class Solution:
    def destroyTargets(self, nums: List[int], space: int) -> int:
        tracker = {}
        minVal = float('inf')
        
        for n in nums:
            rem = n % space
            if not rem in tracker:
                tracker[rem] = 0
            tracker[rem] += 1
        maxTargets = max(tracker.values())
        
        for n in nums:
            rem = n % space
            if tracker[rem] == maxTargets and n < minVal:
                minVal = n
        
        return minVal