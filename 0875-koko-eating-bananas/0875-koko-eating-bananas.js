/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    // binary search is on eating rate k
    // 1 2 3 4 5 6 7 8 9 10 11
    //       l
    //       m
    //         r
    
    let l = 1, r = Math.max(...piles);
    while (l <= r) {
        const mid = Math.floor((l+r)/2);
        let sum = 0;
        for (let b of piles) {
            sum += Math.ceil(b/mid);
        }
        if (sum <= h) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return r+1;
};