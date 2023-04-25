/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // if (s.length % 2 === 1) return false;
    // console.log(s.substring(0,1))
    let i = 1;
    
    while (i < s.length) {
        let subStr = s.substring(0, i);
        let newStr = '';
        // console.log('substr, ', subStr)
        while (newStr.length <= s.length) {
            newStr += subStr;
            // console.log('newStr, ', newStr)
            if (newStr === s) return true;
        }
        i++;
    }
    
    return false;
}