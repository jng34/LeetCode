/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length === 1) return false;
    if (s.length !== goal.length) return false;
    
    let mapStr = {};
    if (s === goal) {
        for (let i=0; i<s.length; i++) {
            mapStr[s[i]] = (mapStr[s[i]] || 0) + 1;
        }
    }
    
    if (Object.keys(mapStr).length > 1) {
        for (let key in mapStr) {
            if (mapStr[key] > 1) return true;
        }
        return false;   
    }
    
    let strArr = s.split('');
    let diffIndex = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] !== goal[i]) diffIndex.push(i);
    }
    const [first, second] = diffIndex;
    [strArr[first], strArr[second]] = [strArr[second], strArr[first]];
    return strArr.join('') === goal;        
};