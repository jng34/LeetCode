/**
 * @param {number} n
 * @return {string[]}
 */

var simplifiedFractions = function(n) {

    // Track seen fractions and create ans array.
    let seen = new Set();
    let ans = [];
    
    // Iterate denominator i from 2 to n (inclusive)
    for (let denom=2; denom<=n; denom++) {
        // For each numer from 1 to less than denom
        for (let numer=1; numer<denom; numer++) {
            
            const fraction = numer/denom;
            // If fraction exists in seen set, continue.
            if (seen.has(fraction)) {
                continue;
            
            // else add fraction to seen and add to ans.
            } else {
                seen.add(fraction);
                ans.push(numer+'/'+denom);
            }
        }
    }
    
    return ans;    
};