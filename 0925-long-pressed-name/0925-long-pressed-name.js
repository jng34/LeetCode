/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    
    /*
     saeed
      i
     
     ssaaedd
      j
    */
    let i = 0, j = 0;
    let temp = name[0];
    while (i < name.length || j < typed.length) {
        if (name[i] === typed[j]) {
            temp = name[i];
            i++;
            j++;
        } else {
            if (typed[j] === temp) {
                j++;
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
};