/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    
    /*
        Create a maxPts var & hashmap (freq) to get frequency of each element in nums
        for n in nums:
            freq[n] = (freq(n) || 0) + 1
        
        Memoization to optimize run time
        
        With a helper function, recursively choose to either pick curr or skip
        Base cases: 
            if elem in memo:
                return memo[elem]
            elem not in freq:
                return 0;
        
        for each elem in freq:
            Two choices:
            1. Sum the elem's count and recursively call elem + 2 
               since we are effectively removing all elem - 1 abd elem + 1 and not counting them
            2. Skip the elem and recursively call the next elem, elem + 1
        
            -update max points for each iteration (memoization)
            -save elem and max points to memo
        return memo[elem]
    */
    
    const memo = {};
    nums.sort((a,b) => a-b);
    return helper(0);
    
    // Helper fn
    function helper(idx) {
        if (idx >= nums.length) return 0;
        if (memo[idx]) return memo[idx];
        
        let earned = nums[idx];
        let skipIdx = idx+1;
        
        while (skipIdx < nums.length && nums[skipIdx] === nums[idx]) {
            earned += nums[idx];
            skipIdx++;
        }
        
        while (skipIdx < nums.length && nums[skipIdx] === nums[idx] + 1) {
            skipIdx++;
        }
        
        memo[idx] = Math.max(earned + helper(skipIdx), helper(idx + 1))
        return memo[idx];
    }
};