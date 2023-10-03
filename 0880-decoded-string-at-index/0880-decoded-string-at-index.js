/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    /*
        Count the length of the decoded string
        while iterating through s.
        Return k-1 of decoded st
    */
    
    // Calculate total length of decoded str
    let decodedLen = 0;    
    for (let i=0; i<s.length; i++) {
        !isNaN(s[i]) ? decodedLen *= +s[i] : decodedLen++;
    }
    
    for (let i=s.length-1; i>=0; i--) {
        k %= decodedLen;
        if (k === 0 && isNaN(s[i])) return s[i];
        if (!isNaN(s[i])) {
            decodedLen = Math.ceil(decodedLen / +s[i]);
        } else {
            decodedLen--;
        }
    }

};