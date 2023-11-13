/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    /*
        Keep It Simple.
        Create a set that contains all vowels.
        Create an array to store permutation t.
        Create another array to collect all vowels.
        For each char in s:
            if char is in set, add to vowels array.
        Sort vowels in descending ASCII value.
        For each char in s:
            if char is not a vowel, then push into array t.
            else pop from vowels array and push into array t.
        Join the array and return string.
    */
    
    const vowels = new Set([...'aeiou']);
    let t = [], vowelsArr = [];
    
    for (let ch of s) {
        if (vowels.has(ch.toLowerCase())) {
            vowelsArr.push(ch);
        }
    }
    
    vowelsArr.sort().reverse();
    
    for (let ch of s) {
        if (vowels.has(ch.toLowerCase())) {
            t.push(vowelsArr.pop());
        } else {
            t.push(ch);
        }
    }
    
    return t.join('');
};