/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let dict = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in dict) {
            if (dict[s[i]] !== t[i]) return false;
        } else {
            if (Object.values(dict).includes(t[i])) return false; 
            dict[s[i]] = t[i];
        }
    }
    return true;
};