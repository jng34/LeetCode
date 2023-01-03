class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max_area = 0
        curr_area = 0
    
        while left < right:
            curr_area = (right - left) * min(height[left], height[right])
            if height[left] <= height[right]:
                left += 1 
            else: 
                right -= 1
            max_area = max(max_area, curr_area)
            
        return max_area