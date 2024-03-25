/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head, fast = head;
  
  while (fast && fast.next && fast.next.next) {
    // find intersection point of cycle
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      // find starting point of cycle
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return fast;
    }
  }
  
  return null;
};