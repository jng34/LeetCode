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
var deleteMiddle = function(head) {
  // Use slow and fast pointers, also keep track of prev node of slow
  // Find middle node, then set prev.next to slow.next to delete middle node
  // Return head
  
  if (!head.next) return head.next;
  
  let prev = ListNode();
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  prev.next = slow.next;
  
  return head;
};