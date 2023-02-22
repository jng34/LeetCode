class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
      
      def isPossible(capacity):
        days_needed = 1
        current_load = 0
        
        for weight in weights:
          current_load += weight
          if current_load > capacity:
            days_needed += 1
            current_load = weight
            
        return days_needed <= days
      
      
      l = max(weights)
      r = sum(weights)
      
      while l < r:
        mid = math.floor((l + r)/2)
        feasible = isPossible(mid)
        if feasible:
          r = mid
        else:
          l = mid + 1
      
      return l