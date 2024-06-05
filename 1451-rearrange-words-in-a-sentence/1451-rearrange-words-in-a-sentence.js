/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let textArr = text.split(' ');
    textArr.sort((a,b) => a.length - b.length);
    
    // capitalize first word and lowercase subsequent words
    for (let i = 0; i < textArr.length; i++) {
        if (i === 0) {
            textArr[i] = textArr[i][0].toUpperCase() + textArr[i].substr(1);
        } else {
            textArr[i] = textArr[i].toLowerCase();
        }
    }
    
    return textArr.join(' ');
};