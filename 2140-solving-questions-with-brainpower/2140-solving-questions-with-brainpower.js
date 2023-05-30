/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let memo={};
    
    function answerQuestion(index) {
        // Base cases
        if (index >= questions.length) return 0;
        if (index in memo) return memo[index];
        
        const [ pts, bp ] = questions[index];
        
        // Choose to solve the current question and 
        // skip the next 'brainpower' number of questions;
        const solve = pts + answerQuestion(index + bp + 1); 
        
        // Choose to skip and answer the next question;
        const skip = answerQuestion(index + 1);
        
        let maxPoints = Math.max(skip, solve);
        
        memo[index] = maxPoints;
        
        return maxPoints;
    }
    
    return answerQuestion(0);
};