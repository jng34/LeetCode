/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    // Convert nums to a set for O(1) lookup
    const numSet = new Set(nums);
    
    // Traverse through linked list to check for candidates that exist in numSet
    // Track prev, curr, and next nodes to delete
    let prev = new ListNode();
    let newHead = prev;
    let curr = head;
    
    while (curr) {
        // if numSet does not have curr node, set prev's next to curr node (delete)
        if (!numSet.has(curr.val)) {
            prev.next = curr;
            prev = prev.next;
        } else {
            curr ? prev.next = curr.next : prev.next = null;
        }
        curr = curr.next;
    }
        
    return newHead.next;
};