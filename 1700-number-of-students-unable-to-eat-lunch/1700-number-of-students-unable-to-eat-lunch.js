/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    // students = [1, 1]
    // sandwiches = [0, 1]
    //               i

    // sw[0] = 3
    // sw[1] = 2
    
    // st[0] = 2
    // st[1] = 3
    
    // find ct of circular and square sandwiches, students
    const swCt = { 0: 0, 1: 0 };
    const studCt = { 0: 0, 1: 0 };
    sandwiches.forEach(sw => swCt[sw] = swCt[sw] + 1);
    students.forEach(sw => studCt[sw] = studCt[sw] + 1);
    
    // If number of circular sw = circular students & sq sw = sq stud, return 0
    if (swCt[0] === studCt[0] && swCt[1] === studCt[1]) return 0;
    
    let i = 0; 
    let studQueue = [...students];
    while (i < sandwiches.length) {
        const currSW = sandwiches[i];
        const currStud = studQueue.shift();
        if (currSW !== currStud) {
            studQueue.push(currStud); 
            if (studCt[currSW] === 0) return studQueue.length;
        } else {
            swCt[currSW] = swCt[currSW] - 1;
            studCt[currStud] = studCt[currStud] - 1;
            i++;
        }
    }
    
    return studQueue.length;
};