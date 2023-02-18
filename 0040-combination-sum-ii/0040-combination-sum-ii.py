class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        results = []
        
        def searchPath(index, path, target):
            # base cases
            if target < 0: 
                return
            if target == 0:
                return results.append(path[:])
            
            for i in range(index, len(candidates)):
                if i > index and candidates[i] == candidates[i-1]: 
                    continue
                path.append(candidates[i])
                searchPath(i + 1, path, target - candidates[i])
                path.pop()
        
        searchPath(0, [], target)
        return results