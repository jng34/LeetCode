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
    // find length of linked list
    let length = 0;
    
    // iterate through linked list 
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }
    
    // find the middle index
    let mid = Math.floor(length/2);
    
    // iterate through linked list again and return middle node
    curr = head;
    while (mid > 0) {
        curr = curr.next;
        mid--;
    }
    
    return curr;
};