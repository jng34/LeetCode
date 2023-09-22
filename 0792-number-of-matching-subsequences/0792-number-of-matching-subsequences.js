/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let ans=0;
    for(const word of words){
        let idx=-1;
        let isSubseq=true;
        for(let i=0;i<word.length;i++){
            idx=s.indexOf(word[i],idx+1);
            if(idx===-1){
                isSubseq=false;
                break;
            }
        }
        if(isSubseq){
            ans++;
        }
    }
    return ans;
};