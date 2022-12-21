/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0)
        return 0;
    const n = s.length;
    const st = new Set();
    let len = 1;
    st.add(s[0]);
    let i =1;
    let maxLen = 0;
    while(i<n){
    // check if consiqutive chars are distinct and non repeating
        if(s[i]!==s[i-1] && !st.has(s[i])){
            st.add(s[i]);
            len++;
            i++;
               // back up the max length
            if(len>maxLen){
                maxLen = len; 
            }
        } else {
        // move forward for repeating chars
            if(len ===1) {i++;}
            else{
            // reset the substring and set the pivot for next sub string
                st.clear();
                i=i-len+1;
                len = 0;  
            }
        }
    }
    return maxLen || len;
};