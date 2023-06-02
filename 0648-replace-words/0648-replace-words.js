/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let strArr = sentence.split(' ');
    for (let i=0; i<strArr.length; i++) {
        dictionary.forEach((root) => {
            if (strArr[i].startsWith(root)) {
                strArr[i] = root;
            }
        })
    }
    return strArr.join(' ');
};