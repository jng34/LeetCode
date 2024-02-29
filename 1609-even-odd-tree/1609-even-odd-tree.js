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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  // use hash obj to store keys = levels, vals = [ node values ]
  const levels = {};
  // Iterate through binary tree using DFS
  let stack = [[root, 0]];

  while (stack.length > 0) {
    const [cur, lvl] = stack.pop();
    
    // if even level has even # or odd level has odd #, return false.
    if (lvl % 2 === 0 && cur.val % 2 === 0) return false;
    if (lvl % 2 === 1 && cur.val % 2 === 1) return false;
    
    // store current node val in the array for that level
    if (lvl in levels) {
      const arr = levels[lvl];
      const last = arr[arr.length - 1];
      if (lvl % 2 === 0) {
        // check each even # level to see if array has increasing odd #s
        if (last >= cur.val) return false;
      } else {
        // check each odd # level to see if array has decreasing even #s
        if (last <= cur.val) return false;
      }
      levels[lvl].push(cur.val);
    } else {
      levels[lvl] = [cur.val];
    }

    if (cur.right) stack.push([cur.right, lvl + 1]);
    if (cur.left) stack.push([cur.left, lvl + 1]);
  }
  
  return true;
};