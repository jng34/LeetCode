/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const search = s.match(/[^\s]+/gi);
    return search ? search.length : 0;
}