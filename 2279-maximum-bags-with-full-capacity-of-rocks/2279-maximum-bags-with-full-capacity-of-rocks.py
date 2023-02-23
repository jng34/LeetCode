class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
      rocks_needed = [0]*len(rocks)
      for i in range(len(rocks)):
        rocks_needed[i] = capacity[i]-rocks[i]
      rocks_needed.sort()
      
      max_bags = 0
      
      for r in range(len(rocks_needed)):
        if rocks_needed[r] == 0:
          max_bags += 1
        elif additionalRocks >= rocks_needed[r]:
          additionalRocks -= rocks_needed[r]
          rocks_needed[r] = 0
          max_bags += 1  
      
      return max_bags