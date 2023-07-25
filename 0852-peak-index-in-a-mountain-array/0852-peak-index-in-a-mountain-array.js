/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // Binary search
    // 2, 3, 7, 5, 3, 2, 1, 0
    //    l     r
    //       m
    // move pointers to right
    
    let l=0, r=arr.length-1;
    while (l<r) {
        const mid = Math.floor((l + r)/2);
        if (arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]) {
            return mid;
        }
        if (arr[mid-1] < arr[mid]) {
            l = mid;
        } else {
            r = mid;
        }
    }
    // return l;
};