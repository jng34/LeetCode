/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  // sort seats and students
  seats.sort((a,b) => a-b);
  students.sort((a,b) => a-b);
  
  let moves = 0;
  
  for (let i = 0; i < students.length; i++) {
    const s1 = students[i];
    const s2 = seats[i];
    if (s1 !== s2) moves += Math.abs(s1 - s2);
  }
  
  return moves;
};