/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    // sort the asteroids according to mass
    asteroids.sort((a,b) => a-b);
    let totalMass = mass;
    for (let asteroid of asteroids) {
        if (totalMass < asteroid) return false;
        totalMass += asteroid;
    }
    return true;   
};