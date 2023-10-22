/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function(reward1, reward2, k) {
    /*
        Sum up all reward2 points - total
        for each i in n:
            if reward1[i] - rewards[i] > 0:
                save [index, diff] in mouse1 arr
        sort mouse1 from greatest to smallest based on diff*
        loop through mouse1 arr:
            if count = k, 
                break;
            else 
                subtract rewards[i] from total 
                add reward1[i] to total
        return total
    */
    
    const n = reward1.length;
    let total = reward2.reduce((a,b) => a+b, 0);
    const mouse1 = [];
    
    for (let i=0; i<n; i++) {
        const diff = reward1[i]-reward2[i];
        mouse1.push([diff, i]);
    }
    
    mouse1.sort((a,b) => b[0]-a[0]);
    let count = 0;
    for (let cheese of mouse1) {
        if (count === k) break;
        const idx = cheese[1];
        total += reward1[idx] - reward2[idx];
        count++;
    }
    
    return total;
};