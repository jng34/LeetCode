/**
 * @param {number[]} arr
 * @return {number}
 */


var maximumElementAfterDecrementingAndRearranging = function(arr) {
    const n = arr.length;
    
    // Sort arr in ascending order.
    arr.sort((a,b) => a-b);
    
    // Set first elem to 1.
    arr[0] = 1;
    
    // Iterate through arr from idx = 1.
    for (let i=1; i<n; i++) {
        // If abs(curr - prev) > 1, assign curr = prev + 1;
        if (Math.abs(arr[i] - arr[i-1]) > 1) {
            arr[i] = arr[i-1] + 1;
        }    
    }
    
    // Return arr[arr.length-1] -> max value.
    return arr[n-1];
};