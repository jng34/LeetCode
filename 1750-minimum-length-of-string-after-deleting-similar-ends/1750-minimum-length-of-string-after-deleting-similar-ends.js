/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {    
    // two pointers to track prefix and suffix
    let l = 0, r = s.length - 1;
    
    // while the prefix and suffix are the same chars
    // move l to the right and r to the left
    
    while (l < r && s[l] === s[r]) {      
        const ch = s[l];
        while (l <= r && s[l] === ch) {
            l++;
        }
        while (r > l && s[r] === ch) {
            r--;
        }
    }
    
    return r - l + 1;
};