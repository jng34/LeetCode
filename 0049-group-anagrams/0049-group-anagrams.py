class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        if len(strs) == 1:
            return [strs]
        
        hash_map = {}
        for str in strs:
            str_arr = [*str]
            str_arr.sort()
            new_str = ''.join(str_arr)
            if not new_str in hash_map:
                hash_map[new_str] = [str]           
            else:
                hash_map[new_str].append(str)
        
        return hash_map.values()