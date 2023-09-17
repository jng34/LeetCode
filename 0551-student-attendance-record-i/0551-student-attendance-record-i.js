/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    const lateRegEx = /L{3,}/gi
    if (lateRegEx.test(s)) return false;
    
    let absents = 0;
    for (let rec of s) {
        if (rec === 'A') absents++;
        if (absents === 2) return false;
    }
    
    return true;
};