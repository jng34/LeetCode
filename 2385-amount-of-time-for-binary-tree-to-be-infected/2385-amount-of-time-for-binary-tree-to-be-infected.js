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
 * @param {number} start
 * @return {number}
 */

// Create an undirected (bi-directional), adjacency graph
// Create a seen set to track all infected nodes
// Increment minutes after each iteration
// Return minutes;
var amountOfTime = function(root, start) {
  let minutes = 0;
  const adjGraph = buildGraph(root);
  
  // Initialize infected set with starting node.
  const infected = new Set([start]);
  
  // Use queue for BFS 
  let infQueue = [start];
  
  while (infQueue.length > 0) {
    let levelSize = infQueue.length;
    
    while (levelSize > 0) {
      const currInf = infQueue.shift();
      const neighbors = adjGraph[currInf];
      
      for (let neighbor of neighbors) {
        if (!infected.has(neighbor)) {
          infected.add(neighbor);
          infQueue.push(neighbor);
        }
      }
      
      levelSize--;
    }
    
    minutes++;
  }
  return minutes-1;
  
  
  // Helper function to build graph
  function buildGraph(node) {
    const graph = {};
    let stack = [[node, 0]];
    while(stack.length > 0) {
      const [curr, parentVal] = stack.pop();
      graph[curr.val] = [];
      if (parentVal !== 0) graph[curr.val].push(parentVal); 
      
      if (curr.right) {
        graph[curr.val].push(curr.right.val);
        stack.push([curr.right, curr.val]);
      }
      if (curr.left) {
        graph[curr.val].push(curr.left.val);
        stack.push([curr.left, curr.val]);
      }
    }
    
    return graph;
  }
};