/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    if (people.length === 1) return 1;
    people.sort((a,b) => b-a);
    let boats = 0;
    let left = 0, right = people.length - 1;
    
    // limit 5
    // 5, 4, 3, 3, 1
    //       l
    //             r
    // boats = 1
    
    while (left <= right) {
        if (people[left] === limit) {
            left++;
        } else {
            const sum = people[left] + people[right];
            if (sum <= limit) {
                left++;
                right--;
            } else {
                left++;
            }
        }
        boats++;
    }
    
    return boats;
};