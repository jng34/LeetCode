class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
      boxTypes.sort(key = lambda x: x[1])
      boxTypes.reverse()  
      total = 0
      
      for package in boxTypes:
        boxes, units = package[0], package[1]
        if truckSize >= boxes:
          total += boxes*units
          truckSize -= boxes
        elif 0 < truckSize < boxes:
          total += truckSize*units
          truckSize = 0
        else:
          break
      
      return total