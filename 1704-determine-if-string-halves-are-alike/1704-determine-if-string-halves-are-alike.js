/**
 * @param {string} s
 * @return {boolean}
 */

// Separate s into halves.
// For each half, we keep track of vowel count.
// Return true if vowel counts are equal, false if not.

var halvesAreAlike = function(s) {
    // Create a set of vowels
    const vowels = new Set([
        'a','e','i','o','u','A','E','I','O','U'
    ]);
    
    const n = s.length;
    const halfPt = n/2;
    let a = 0, b = 0;
    
    // Count number of vowels in a.
    for (let i=0; i<halfPt; i++) {
        if (vowels.has(s[i])) a++;
    }
    
    // Count number of vwels in b.
    for (let j=halfPt; j<n; j++) {
        if (vowels.has(s[j])) b++;
    }
    
    return a === b;
};







