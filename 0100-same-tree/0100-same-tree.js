/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let queue = [p, q];
  
  while (queue.length > 0) {
    const curr1 = queue.shift();
    const curr2 = queue.shift();
    
    // compare values and return false if unequal
    if (!curr1 && !curr2) continue;
    if (!curr1 || !curr2 || curr1.val !== curr2.val) return false;
    
    queue.push(curr1.left);
    queue.push(curr2.left);
    queue.push(curr1.right);
    queue.push(curr2.right);
  }
  
  return true;
};