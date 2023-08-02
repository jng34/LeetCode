/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {    
    // base case
    const total = candies.reduce((a,b) => a+b, 0);
    if (k > total) return 0;
    if (k === total) return 1;
    
    let l = 1, r = Math.max(...candies);
    while (l <= r) {
        const mid = Math.floor((l + r)/2); 
        let sum = 0;
        for (let n of candies) {
            sum += Math.floor(n/mid);    
        }
        if (sum >= k) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l-1;
};