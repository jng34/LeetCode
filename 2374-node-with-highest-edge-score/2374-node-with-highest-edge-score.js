/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
  // Create adjacency graph 
  const graph = createAdjGraph(edges);
  // Return lowest index with highest edge score
  let highest = 0;
  let node = Infinity;
  
  // First pass: find highest edge score
  for (let nodeKey in graph) {
    highest = Math.max(highest, graph[nodeKey]);
  }

  // Second pass: find lowest index (node) of highest edge score
  for (let nodeKey in graph) {
    if (graph[nodeKey] === highest) {
      node = Math.min(node, Number(nodeKey));
    }
  }
  return node;
  
  
  // Helper 
  function createAdjGraph(edges) {
    const graph = {};
    // Iterate through each node and sum up edge score
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      graph[edge] = (graph[edge] || 0) + i;
    }
    return graph;
  }
};
