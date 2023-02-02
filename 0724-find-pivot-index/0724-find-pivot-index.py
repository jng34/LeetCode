class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        # Start by creating two variables, leftSum and rightSum
        # leftSum = 0, rightSum = sum of nums
        # increment and decrement leftSum & rightSum, respectively 
        # iterate through nums, and check if the two sums are equal
        # return i if they are, and return -1 at the end of loop for no such index
        
        leftSum = 0
        rightSum = sum(nums)
        i = 0
        
        while i < len(nums):
            rightSum -= nums[i]
            if leftSum == rightSum:
                return i
            leftSum += nums[i]
            i += 1
        
        return -1