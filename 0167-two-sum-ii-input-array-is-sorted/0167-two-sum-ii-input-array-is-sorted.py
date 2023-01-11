class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
      # two pointer strategy, left and right
      # check if elems at left and right add to target
      # and increment left, decrement right accordingly
      # numbers sorted in ascending order 
      # check if sum < target
        left = 0
        right = len(numbers) - 1
        while left < right:
          curr_sum = numbers[left] + numbers[right]
          if curr_sum > target:
            right -= 1
          elif curr_sum < target:
            left += 1
          else:
            return [left+1, right+1]
  