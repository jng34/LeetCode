/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b) => a.length-b.length)
    // console.log(strs)
    const shortest = strs[0];
    let prefix = '';
    for (let char of shortest) {
        prefix += char;
        for (let i=1; i<strs.length; i++) {
            //check if remaining words starts with prefix
            console.log(strs[i])
            console.log(prefix)
            if (!strs[i].startsWith(prefix)) {
                prefix = prefix.slice(0, prefix.length-1);
                return prefix;
            }
        }
    }
    return prefix;
};