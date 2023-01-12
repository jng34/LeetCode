class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
      left = 0 
      right = write = len(nums)-1
      leftSq, rightSq = nums[left]**2, nums[right]**2
      result = [0]*len(nums)
      
      while write >= 0:
        if leftSq <= rightSq:
          result[write] = rightSq
          right -= 1
          rightSq = nums[right]**2
        else:
          result[write] = leftSq
          left += 1
          leftSq = nums[left]**2
        write -= 1
        
      return result
    
      # [ -10, -6, 0, 1, 2]
      # [ 100, 36, 0, 1, 4]
      
      
