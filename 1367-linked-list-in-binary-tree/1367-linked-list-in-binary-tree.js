/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  // DFS for binary tree
  // start check if curr node val equals head
  if (!head) return true;
  if (!root) return false;
  return dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);
  
  
  // DFS helper
  function dfs(treeNode, listNode) {
    if (!listNode) return true;
    if (!treeNode) return false;
    return listNode.val === treeNode.val && (dfs(treeNode.left, listNode.next) || dfs(treeNode.right, listNode.next))
  }
};