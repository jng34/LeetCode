/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 1) return [strs];
    
    let hash = {};
    let results = [];
    
    for (let str of strs) {
        const sorted = [...str].sort().join('');
        if (!(sorted in hash)) {
            hash[sorted] = [str];
        } else {
            hash[sorted].push(str);
        }
    }
    
    for (let key in hash) {
        results.push(hash[key]);
    }
        
    return results;
};