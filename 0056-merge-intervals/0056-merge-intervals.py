class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # Base case 
        if len(intervals) == 1: 
            return intervals
        
        # Sort intervals by end time, ascending order
        intervals.sort(key=lambda x: x[0])
        
        # Declare variables result array and initiate start and end to be first interval
        result = []
        start = intervals[0][0]
        end = intervals[0][1]
        
        for i in range(1, len(intervals)):
            # Destructure current interval
            currStart, currEnd = intervals[i][0], intervals[i][1]
            
            if currStart <= end:
                end = max(end, currEnd)
            else:
                result.append([start, end])
                start = currStart
                end = currEnd
        
        result.append([start, end])
        return result
        
        