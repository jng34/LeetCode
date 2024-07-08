/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let indices = []; // store critical point indices
    let prev = head;
    let curr = prev.next;
    let next = curr.next;
    let idx = 0;
    let ans = [Infinity, -Infinity];
    
    while (next) {
        idx++;
        // check for local extrema
        if ((curr.val < prev.val && curr.val < next.val) || 
          (curr.val > prev.val && curr.val > next.val)) {
            indices.push(idx);
        }
        
        // find min and max distances of critical pts
        if (indices.length > 1) {
            const minDiff = indices[indices.length - 1] - indices[indices.length - 2];
            const maxDiff = indices[indices.length - 1] - indices[0];
            ans[0] = Math.min(ans[0], minDiff);
            ans[1] = Math.max(ans[1], maxDiff);
        }
        prev = curr;
        curr = next;
        next = next.next;
    }
    
    return (indices.length <= 1) ? [-1, -1] : ans;
};