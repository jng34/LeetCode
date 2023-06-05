/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    // Gather all permutations
    const vowels = ["a", "e", "i", "o", "u"];
    let allPerms = [];
    vowels.forEach((vowel) => findAllPerms(0, n, vowel, allPerms, vowels));
    return allPerms.length;
};

function findAllPerms(index, num, str, res, arr) {
    if (str.length === num) {
        res.push(str);
        return;
    }
        
    for (let i=index; i<arr.length; i++) {
        if (arr[i] === str[str.length-1]) {
            findAllPerms(index, num, str+arr[i], res, arr);
        }
        if (arr[i] > str[str.length-1]) {
            findAllPerms(index+1, num, str+arr[i], res, arr);
        }
    }
}