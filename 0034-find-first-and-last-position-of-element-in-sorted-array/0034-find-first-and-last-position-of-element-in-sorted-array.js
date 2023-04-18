/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Use binary search for O(log n)
    let res = [-1,-1];
    let left = 0, right = nums.length-1;
    if (nums[left] === target && nums[right] === target) {
        return [left, right];
    }
    // [5,7,7,8, 8 ,8,9,9,10] target = 9
    //                    r=8
    //              l=5
    //                m=6
    // res = [6,6]
    // [1,2,3,8,8,8,8,8,9] target = 8
    //          m
    //  l 
    //          r
    //
    
    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        if (nums[mid] === target) {
            res = [mid, mid];
            left = mid-1;
            right = mid+1;
            break;
            // check left and right for repeating targets      
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            // nums[mid] > target
            right = mid - 1;
        }
    }

    while (left >= 0 && nums[left] === target) {
        res[0] = left;
        left--;
    }
    
    while (right < nums.length && nums[right] === target) {
        res[1] = right;
        right++;
    }
    
    
    return res;
};