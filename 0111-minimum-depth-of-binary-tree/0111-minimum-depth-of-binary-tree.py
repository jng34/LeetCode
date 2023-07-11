# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        if root.left is None or root.right is None:
            return 1 + self.minDepth(root.left) + self.minDepth(root.right)
        return 1 + min(self.minDepth(root.left), self.minDepth(root.right)) 