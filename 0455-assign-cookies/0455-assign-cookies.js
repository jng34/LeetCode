/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let num = 0;
    g.sort((a,b) => b-a);
    s.sort((a,b) => b-a);
    let i = 0, j = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            num++;
            i++;
            j++;
        } else {
            i++;
        }
        
    }
    return num;
};