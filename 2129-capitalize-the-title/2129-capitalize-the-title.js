/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let wordArr = title.split(' ');
    for (let i=0; i<wordArr.length; i++) {
        wordArr[i] = wordArr[i].toLowerCase();
        if (wordArr[i].length > 2) {
            wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
        }
    }
    return wordArr.join(' ');
};