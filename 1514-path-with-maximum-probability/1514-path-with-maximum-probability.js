/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
  // Undirected, weighted graph
  const graph = buildGraph(edges, succProb);

  // probability array for each node
  const prob = Array(n).fill(0);
  const queue = [[start, 1]];
  prob[start] = 1;

  while (queue.length > 0) {
    let [node, currProb] = queue.shift();
    if (graph[node]) {
      for (let [neighbor, nextProb] of graph[node]) {
        if (currProb * nextProb > prob[neighbor]) {
          prob[neighbor] = currProb * nextProb;
          queue.push([neighbor, prob[neighbor]])
        }
      }
    }
  }
  
  return prob[end];
};




const buildGraph = (edges, succProb) => {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [a,b] = edges[i];
    const prob = succProb[i];
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push([b, prob]);
    graph[b].push([a, prob]);
  }
  return graph;
}