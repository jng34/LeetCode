/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

// n = 8
// 0 1 2 3 4 5 6 7
// 
// i = 0
// 8 - 1 - 1
// n - 1 - i
var pairSum = function(head) {
    let values = [];
    let curr = head;
    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }
    
    let maxTwinSum = 0;
    let i = 0, j = values.length - 1;
    while (i < j) {
        maxTwinSum = Math.max(maxTwinSum, values[i] + values[j]);
        i++;
        j--;
    }
    return maxTwinSum;
};