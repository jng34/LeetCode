/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let res = [];
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const alphaObj = {};
    
    // create a hashmap of nums associated with each letter
    for (let i=0; i<alpha.length; i++) {
        alphaObj[i+1] = alpha[i]; 
    }

    // iterate through s and change num to corresponding letter
    for (let i=0; i<s.length; i++) {
        if (s[i+1] && s[i+2] && isNaN(s[i+2])) { 
            // check if elem i+2 is '#', convert curr + next elems to letter
            const num = s[i+1] ? s[i] + s[i+1] : s[i];
            res.push(alphaObj[num]);
            i=i+2;
        } else  {
            // if elem i+2 is a number, then convert curr elem to letter
            res.push(alphaObj[s[i]]);
        }
    }
    
    return res.join(''); // convert array to string
};