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
    
    const searchPath = (node) => {
        if (node === destination) return true;
        if (seen.has(node)) return false;
        
        seen.add(node);
        for (let neighbor of graph[node]) {
            if (searchPath(neighbor)) return true;
        }
        
        return false;
     }
    
    return searchPath(source);
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

