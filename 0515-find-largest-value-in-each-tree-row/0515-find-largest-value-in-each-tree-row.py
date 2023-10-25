# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        if root == None: 
            return []
        max_vals = {}
        queue = deque([[root, 0]])
        while len(queue) > 0:
            node, row = queue.popleft()
            if row in max_vals:
                max_vals[row] = max(max_vals[row], node.val)
            else:
                max_vals[row] = node.val
            if node.right:
                queue.append([node.right, row + 1])
            if node.left:    
                queue.append([node.left, row + 1])
        return list(max_vals.values())