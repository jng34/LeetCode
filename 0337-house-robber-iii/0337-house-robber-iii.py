# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
      # Helper function
      def accomplice(node):
        if not node:
          return [0, 0]
        
        left_side = accomplice(node.left)
        left_with, left_without = left_side

        right_side = accomplice(node.right)
        right_with, right_without = right_side
        
        with_node = node.val + left_without + right_without
        without_node = max(left_with, left_without) + max(right_with, right_without)
      
        return [with_node, without_node]
     
      # main return
      return max(accomplice(root)[0], accomplice(root)[1])