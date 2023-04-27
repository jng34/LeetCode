/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(["a","e","i","o","u"]);
    const strArr = [...s];
    let vowelsInStr = [];

    // Find all vowels in the string
    for (let i=0; i<s.length; i++) {
        if (vowels.has(s[i].toLowerCase())) {
            vowelsInStr.push(s[i]);
            strArr[i] = '';
        }
    }
    
    // Set each empty string as the vowel
    for (let j=0; j<strArr.length; j++) {
        if (strArr[j] === '') {
            strArr[j] = vowelsInStr.pop();
        }
    }
    
    return strArr.join('');
};