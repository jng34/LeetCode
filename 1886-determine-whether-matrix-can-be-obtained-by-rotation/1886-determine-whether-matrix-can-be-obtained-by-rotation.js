/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    if (checkWithTarget(mat, target)) return true;
    
    let n = 3;
    let rotatedMat = rotateClockWise(mat);
    while (n > 0) {
        if (checkWithTarget(rotatedMat, target)) return true;
        rotatedMat = rotateClockWise(rotatedMat);
        n--;
    }
    return false;
};

function rotateClockWise(arr) {
    let matRev = [...arr].reverse();
    let matRot = matRev[0].map((_, colIndex) => matRev.map(row => row[colIndex]));
    return matRot;
}

function checkWithTarget(arr, target) {
    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[0].length; c++) {
            if (arr[r][c] !== target[r][c]) return false;
        }
    }
    return true;
}