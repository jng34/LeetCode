/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let n = 0;
    // let pS = s[n];
    
    for(i=0; i < t.length; i++) {
        if(s[n] === t[i]){
          n++;
        } 
    }
    console.log(n)
     
    return n === s.length;
}