/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = buildGraph(edges);
    const seen = new Set();
    seen.add(source);
    let queue = [source];
    
    while (queue.length > 0) {        
        const curr = queue.shift();
        if (curr === destination) return true;
        for (let neighbor of graph[curr]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    
    return false;
};

const buildGraph = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
        const [a,b] = edge;
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    
    return graph;
}