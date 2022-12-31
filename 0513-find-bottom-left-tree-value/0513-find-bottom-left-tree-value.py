# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        values = []
        
        def fill_levels(node, level):
          if node is None:
            return
          if len(values) == level:
            values.append(node.val)
          fill_levels(node.left, level + 1)
          fill_levels(node.right, level + 1)
          
        fill_levels(root, 0)
        return values[-1]