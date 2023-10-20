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
    
    const n = nums.length;
    let maxVal = Math.max(...nums);
    const dp = new Array(maxVal+1).fill(0);
    for (let n of nums) {
        dp[n] += n;
    }
    
    dp[1] = Math.max(dp[0], dp[1]);
    
    for (let i=2; i<dp.length; i++) {
        dp[i] = Math.max(dp[i] + dp[i-2], dp[i-1]);
    }
    
    return dp[maxVal];
};