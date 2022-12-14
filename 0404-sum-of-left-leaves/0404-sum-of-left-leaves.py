# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if not root:
          return 0
        
        left_sum = 0
        stack = [root]
        while len(stack) > 0:
          curr = stack.pop()
          if curr.right:
            stack.append(curr.right)
          if curr.left:
            stack.append(curr.left)
            if not curr.left.left and not curr.left.right:
              left_sum += curr.left.val
              
        return left_sum