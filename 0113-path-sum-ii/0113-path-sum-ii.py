# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
      
      def path_finder(root):
        if not root:
          return []
        if not root.left and not root.right:
          return [[root.val]]

        all_paths = []
        left_paths = path_finder(root.left)
        for path in left_paths:
          all_paths.append([ root.val, *path ])

        right_paths = path_finder(root.right)
        for path in right_paths:
          all_paths.append([ root.val, *path ])
          
        return all_paths
      
      paths = path_finder(root)
      result = []
      for sub_path in paths:
        if sum(sub_path) == targetSum:
          result.append(sub_path)
          
      return result
    
        