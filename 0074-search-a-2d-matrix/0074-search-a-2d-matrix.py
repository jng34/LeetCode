class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
      # Helper function to perform binary search for target in specific array
      def helper(index):
        left = 0
        right = len(matrix[index]) - 1
        while left <= right:
          mid = math.floor((left + right)/2)
          if target < matrix[index][mid]:
            right = mid - 1
          elif target > matrix[index][mid]:
            left = mid + 1
          else:
            return True
        return False
      
      # Binary search to find possible array containing target
      left = 0
      right = len(matrix) - 1
      while left <= right:
        mid = math.floor((left + right)/2)
        if target < matrix[mid][0]:
          right = mid - 1
        elif target > matrix[mid][0]:
          if target <= matrix[mid][-1]:
            return helper(mid)
          else:
            left = mid + 1
        else:
          return True
      return False