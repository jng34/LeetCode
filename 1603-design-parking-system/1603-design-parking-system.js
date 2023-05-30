/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigSpaces = big;
    this.medSpaces = medium;
    this.smallSpaces = small;    
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1 && this.bigSpaces >= 1) {
        this.bigSpaces--;
        return true;
    } else if (carType === 2 && this.medSpaces >= 1) {
        this.medSpaces--;
        return true;
    } else if (carType === 3 && this.smallSpaces >= 1) {
        this.smallSpaces--;
        return true;
    } else {
        return false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */