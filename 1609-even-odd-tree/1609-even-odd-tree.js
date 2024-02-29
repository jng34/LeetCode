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
  // if root is even, return false
  if (root.val % 2 === 0) return false;

  // use hash obj to store keys = levels, vals = [ node values ]
  const levels = {};
  // Iterate through binary tree using DFS
  let stack = [[root, 0]];

  while (stack.length > 0) {
    const [cur, lvl] = stack.pop();
    // store current node val in the array for that level
    if (lvl in levels) {
      levels[lvl].push(cur.val);
    } else {
      levels[lvl] = [cur.val];
    }

    if (cur.right) stack.push([cur.right, lvl + 1]);
    if (cur.left) stack.push([cur.left, lvl + 1]);
  }

  for (let lvl in levels) {
    const arr = levels[lvl];
    // check each even # level to see if array has increasing odd #s
    if (Number(lvl) % 2 === 0) {
      let prev = arr[0];
      if (prev % 2 === 0) return false
      for (let i = 1; i < arr.length; i++) {
        prev = arr[i - 1];
        const curr = arr[i];
        if (curr % 2 === 0 || curr <= prev) return false;
      }
    } 
    // check each odd # level to see if array has decreasing even #s
    else {
      let prev = arr[0];
      if (prev % 2 === 1) return false;
      for (let i = 1; i < arr.length; i++) {
        prev = arr[i - 1];
        const curr = arr[i];
        if (curr % 2 === 1 || curr >= prev) return false;
      }
    }
  }

  return true;
};