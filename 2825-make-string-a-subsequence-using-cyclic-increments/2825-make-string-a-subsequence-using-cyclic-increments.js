/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    // Two pointers: i tracks str1, j tracks str2
    let i = 0, j = 0;
    
    // str2 = 'ad'
    //            j
    // str1 = 'abc'
    //            i = 3
    while (j < str2.length) {
        const asciiCode2 = str2[j].charCodeAt(0);
        
        while (i < str1.length) {
            const asciiCode1 = str1.charCodeAt(i);
            const nextCode1 = (asciiCode1 === 122 ? 97 : asciiCode1 + 1);
            if (asciiCode2 === asciiCode1 || asciiCode2 === nextCode1) {
                i++;
                j++;
                break;
            } else {
                i++;
            }
        }
        
        if (i === str1.length) break; 
    }
    
    return j === str2.length;
};