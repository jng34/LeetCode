/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // traverse through linked list from head
    // if node.val == val, then node.next = node.next.next
    if (!head) return null;
    
    // loops through until first node (head) is not equal to the value
    
    while(head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
    let curr = head;
    while (curr && curr.next) {
        
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
         
    }
   
    return head;
};