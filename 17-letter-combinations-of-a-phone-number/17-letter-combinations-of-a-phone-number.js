/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") return [];
    
    const keyPad = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    
    let totalCombos = [...keyPad[digits[0]]], i=1;
    
    while (i < digits.length) {

        const digit = digits[i];
        const digitLetters = keyPad[digit];
        const tempArr = [];
        
        for (let combo1 of totalCombos) {
            for (let combo2 of digitLetters) {
                let newCombo = combo1.concat(combo2);
                tempArr.push(newCombo);
            }

        }

        totalCombos = tempArr;
        i++;
    }

    return totalCombos;
};



