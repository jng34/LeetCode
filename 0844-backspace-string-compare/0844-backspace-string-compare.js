/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let s2 = "", t2 = "", i = 0;
    
    while (i < s.length) {
        if (s[i] === '#') {
            s2 = s2.slice(0,-1);
            i++;
            // continue;
        } else if (s[i+1] === '#') {
            i += 2;
            // continue;
        } else {
            s2 += s[i];
            i++;
        }
    }
      
    i = 0;
    
    while (i < t.length) {
        if (t[i] === '#') {
            t2 = t2.slice(0,-1);
            i++;
            // continue;
        } else if (t[i+1] === '#') {
            i += 2;
            // continue;
        } else {
            t2 += t[i];
            i++;
        }
    }
    // console.log(s2, t2)
    return s2 === t2;
};