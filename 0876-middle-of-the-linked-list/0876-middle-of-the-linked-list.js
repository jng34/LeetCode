/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // Store node vals in an array
    const vals = [];
    
    // iterate through linked list 
    let curr = head;
    while (curr) {
        vals.push(curr.val);
        curr = curr.next;
    }
    
    // find the middle index
    let mid = Math.floor(vals.length/2);
    
    // iterate through linked list again and return middle node
    let midNode = head;
    while (mid > 0) {
        midNode = midNode.next;
        mid--;
    }
    
    return midNode;
};