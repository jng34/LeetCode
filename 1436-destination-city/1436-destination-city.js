/**
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function(paths) {
  // Create an adjacency graph
  const graph = {};
  
  for (let path of paths) {
    const [start, end] = path;
    if (!graph[start]) graph[start] = [];
    if (!graph[end]) graph[end] = [];
    graph[start].push(end);
  }
  
  // Iterate through graph and return dest w empty array
  for (let dest in graph) {
    if (graph[dest].length === 0) return dest;
  }
};