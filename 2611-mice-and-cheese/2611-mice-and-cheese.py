class Solution:
    def miceAndCheese(self, reward1: List[int], reward2: List[int], k: int) -> int:
        """
        Sum up all reward2 points - total
        for each i in n:
            save [index, diff] in mouse1 arr
        sort mouse1 from greatest to smallest based on diff*
        let count = 0
        loop through mouse1 arr:
            if count = k, 
                break;
            else 
                subtract rewards[i] from total 
                add reward1[i] to total
            increment count
        return total
    
        """
        n = len(reward1)
        total = sum(reward2)
        mouse1 = []
        for i in range(0,n):
            diff = reward1[i]-reward2[i]
            mouse1.append([i,diff])
        mouse1_sort = sorted(mouse1, key=lambda x: x[1], reverse=True)
        count = 0
        for idx, pts in mouse1_sort:
            if count == k:
                break
            total += reward1[idx] - reward2[idx]
            count += 1
        return total
       