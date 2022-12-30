/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var rob = function(root) {

  function accomplice(node) {
    if (!node) return [0, 0];
    
    // Left side
    const leftSide = accomplice(node.left)
    const [leftWith, leftWithOut] = leftSide;
    // Right side
    const rightSide = accomplice(node.right)
    const [rightWith, rightWithOut] = rightSide;
    
    // With and Without Node
    const withNode = node.val + leftWithOut + rightWithOut;
    const withOutNode = Math.max(...leftSide) + Math.max(...rightSide);
          
    return [withNode, withOutNode];
  }
  
  return Math.max(...accomplice(root));

};


