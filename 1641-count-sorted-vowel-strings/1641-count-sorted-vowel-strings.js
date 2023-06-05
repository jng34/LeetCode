/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    
    function count(n, index) {
        if (n === 0) {
            res++;
            return;
        }

        for (let i=index; i<5; i++) {
           count(n-1, i)
        }
    }
    
    let res = 0;
    count(n, 0);
    
    return res;
};
