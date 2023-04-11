from collections import deque

class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
      # Build graph
      graph = {}
      for i in range(len(edges)):
        a,b = edges[i]
        edge_prob = succProb[i]
        if a not in graph:
          graph[a] = []
        if b not in graph:
          graph[b] = []
        graph[a].append([b,edge_prob])
        graph[b].append([a,edge_prob])
      
      
      prob_arr = [0]*n
      prob_arr[start] = 1
      queue = collections.deque([[start, 1]])
      
      while(len(queue) > 0): 
        node,curr_prob = queue.popleft()
        if node in graph:
          for neighbor,neigh_prob in graph[node]:
            if curr_prob*neigh_prob > prob_arr[neighbor]:
              prob_arr[neighbor] = curr_prob*neigh_prob
              queue.append([neighbor,prob_arr[neighbor]])
      
      return prob_arr[end]