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
// var sumOfLeftLeaves = function(root) {
//     //base cases
//     if (!root) return 0;
//     if (!root.left && !root.right) return root.val;
   
//     if (root.left) sumOfLeftLeaves(root.left);
//     if (root.right) sumOfLeftLeaves(root.right);
 
//     return sumOfLeftLeaves(root.left);
  
// };
    
// Iterative solution

var sumOfLeftLeaves = function(root, left=true) {
    //base cases
    if (!root) return 0;
    //initate a stack
    let stack = [ root ];
    let sum = 0;
    
    while (stack.length > 0) {
        //remove top most elem
        let curr = stack.pop();
        
        //if left and right children exist, add them to stack
        if (curr.left) {
            stack.push(curr.left);
            
            //check if left node is a leaf node
            if (!curr.left.left && !curr.left.right) sum += curr.left.val;
        }
        
        if (curr.right) stack.push(curr.right);       
    }
    return sum;
};