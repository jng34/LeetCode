/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const n = difficulty.length;
    const jobs = [];
    for (let i = 0; i < n; i++) {
        jobs.push([difficulty[i], profit[i]]);
    }
    jobs.sort((a,b) => a[0]-b[0]);
    
    for (let i = 1; i < n; i++) {
        jobs[i][1] = Math.max(jobs[i][1], jobs[i-1][1]);
    }
    
    let ans = 0;
    for (let w of worker) {
        // perform binary search on jobs
        let maxProfit = 0;
        let l = 0;
        let r = n - 1;
        
        while (l <= r) {
            const m = Math.floor((l + r)/2);
            const diff = jobs[m][0];
            if (diff <= w) {
                maxProfit = Math.max(maxProfit, jobs[m][1]);
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        ans += maxProfit;
        // [1,2,3,4,5,5,6,7,8,9]
        //            l r
        //            m 
        //  w = 5
    }
    
    return ans;
};